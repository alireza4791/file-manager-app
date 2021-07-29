//node modules
const https = require('https');

//json file link
const mimeURL = 
'https://gist.githubusercontent.com/AshHeskes/6038140/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json';


const getMimeType = extension =>{
    return new Promise((resolve, reject) => {
        https.get(mimeURL, response => {
            if(response.statusCode < 200 || response.statusCode > 299){
                reject(`Error: failed to load mime types json file: ${response.statusCode}`);
                console.log(`Error: failed to load mime types json file: ${response.statusCode}`);
                return false;
            }

            let data = '';

            //receive data by chunks and store them in data
            response.on('data', chunk => {
                data += chunk;
                });

            //receive data by chunks and store them in data
            response.on('end', () => {
                resolve(JSON.parse(data)[extension]);
                });

                }).on('error', (e) => {
                    console.error(e);
                });
})
}

module.exports = getMimeType;