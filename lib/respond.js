//modules
const url = require('url');
const path = require('path');
const fs = require('fs');

const BuildBreadCrumb = require('./breadcrumb.js');
const BuildMainContent = require('./maincontent.js');
const getMimeType = require('./getMimeType.js');

//location of the static folder
const StaticBasePath = path.join(__dirname, '..',
'static');

const respond = (request, response) =>{
    let pathname = url.parse(request.url, true).pathname;
    //getting rid of the favicon request
    if(pathname === '/favicon.ico'){
        return false;
    }

    //decode the pathname
    pathname = decodeURIComponent(pathname);

    //joining the basepath with the pathname to create full static path
    const FullStaticPath = path.join(StaticBasePath,
    pathname);
    
    //if there is no file or folder we write error404
    if(!fs.existsSync(FullStaticPath)){
        console.log(`${FullStaticPath} does not exist`);
        response.write('<h1>Error404: file not found</h1>');
        response.end();
        return false;
    }
    // creating an object using lstat for checking if we have the searched content
    let stats;
    try{
    stats = fs.lstatSync(FullStaticPath);
    }catch(err){
        console.log(`error: ${err}`);
    }
    if(stats.isDirectory())
    {
        let data = fs.readFileSync(path.join(StaticBasePath,
        'main-files/index.html'), 'utf-8');

        // creating an array using the pathname
        let PathElements = pathname.split('/').reverse();

        //removing empty characters from it
        PathElements = PathElements.filter(element => element !== '');
        
        //storing the first element inside a variable
        let FolderName = PathElements[0];
        
        //check to see if it's undefined
        if(FolderName === undefined){
            FolderName = 'Home';
        }
        console.log(pathname);
        //converting pathname to a string to replace the crumbs text
        const BreadCrumb = BuildBreadCrumb(pathname);

        //building the main content of the web page
        [MainContent, item_name] = BuildMainContent(FullStaticPath, pathname);

        //replacing main-files data with the data the user is searching for
        data = data.replace('File Explorer App', FolderName);
        data = data.replace('crumbs', BreadCrumb);
        data = data.replace('maincontent', MainContent);
        response.statusCode = 200;
        response.write(data);
        return response.end();
    }

    if(!stats.isFile()){
        response.statusCode = 401;
        response.write(`<h1>401 acces denied</h1>`);
        console.log('not a file!');
        return response.end();
    }

    let fileDetails = {};
    fileDetails.extname = path.extname(FullStaticPath);
    console.log(fileDetails.extname);
    //file size
    let stat;
    try{
        stat = fs.statSync(FullStaticPath);
    }catch(err)
        {
        console.log(`statSynch Error: ${err}`);
        }
        fileDetails.size = stat.size;

        getMimeType(fileDetails.extname).then(mime =>{
        let head = {};
        let options = {};
        let statusCode = 200;

        head['Content-type'] = mime;
        //for streaming a pdf file
        if(fileDetails.extname === '.pdf'){
            //for pdf display
            head['Content-Disposition'] = 'inline';
            //for pdf download
            // head['Content-Disposition'] = `attachment;filename=${item_name}.pdf`;
        }
        //for streaming audio/video
        if(RegExp('audio').test(mime) || RegExp('video').test(mime)){
            head['Accept-Ranges'] = 'bytes';

            const range = request.headers.range;

            if(range){
                const start_end = range.replace(/bytes=/, "").split('-');
                const start = parseInt(start_end[0]);
                const end = start_end[1]
                ? parseInt(start_end[1])
                : fileDetails.size - 1;

                head['Content-Range'] = `bytes ${start}-${end}/${fileDetails.size}`;
                head['Content-Length'] = end - start + 1;
                statusCode = 206;
                
                //options
                options = {start, end};
            }
        }
        // if(RegExp('audio').test(mime) || RegExp('video').test(mime)){
        //     head['Accept-Ranges'] = 'bytes';
        //     const range = request.headers.range;
        //     console.log(`range: ${range}`);
        //     if(range){
        //         const start_end = range.replace(/bytes=/, "").split('-');
        //         const start = parseInt(start_end[0]);
        //         const end = start_end[1]
        //         ? parseInt(start_end[1])
        //         : fileDetails.size - 1;
        //         head['Content-Range'] = `bytes ${start}-${end}/${fileDetails.size}`;
        //         head['Content-Length'] = end - start + 1;
        //         statusCode = 206;
        //         options = {start, end};
        //     }
        // }

        // fs.promises.readFile(FullStaticPath, 'utf-8').then(data =>{
        //     response.writeHead(statusCode, head);
        //     response.write(data);
        //     response.end();
        //  }).catch(error => {
        //     console.log(`error while reading file ${error}`);
        //     response.statusCode = 404;
        //     response.write('404: file reading error');
        //     return response.end();
        //  });

        //streaming method
        const fileStream = fs.createReadStream(FullStaticPath, options);

        //stream chunks to your response object
        response.writeHead(statusCode, head);
        fileStream.pipe(response);

        //events
        fileStream.on('close', () =>{
            return response.end();
        });

        fileStream.on('error', error =>{
            console.log(`error while reading file ${error.code}`);
            response.statusCode = 404;
            response.write('404: file reading error');
            return response.end();
        });
    })
    .catch(err =>{
        response.statusCode = 500;
        response.write(`<h1>status code 500: internal server error</h1>`);
        console.log(`Error: ${err}`);
        return response.end();
    });
}

module.exports = respond;