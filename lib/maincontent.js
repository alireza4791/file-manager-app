//node modules
const fs = require('fs');
const path = require('path');

//require files
const filesizeDir = require('./calculatesizeDir.js');
const filesizeFile = require('./calculatesizeFile.js');

const BuildMainContent = (FullStaticPath, pathname)=>{
    let mainContent = '';
    let items;
    let itemDetails = {};
    try{
        items = fs.readdirSync(FullStaticPath);
        console.log(items);
    }
    catch(err){
        console.log(`readdir error: ${err}`);
    }
    

    //remove .DS_Store
    items = items.filter(element => {return element !== '.DS_Store'});

    //remove the main project files
    if(pathname === '/'){
        items = items.filter(element => {return element !== 'main-files'});
    }


    items.forEach(item =>{
        //links
        let link = path.join(pathname, item);


        //icons
        
        itemDetails.name = item;
        const itemFullStaticPath = path.join(FullStaticPath,
            itemDetails.name);
        try{
            itemDetails.stats = fs.statSync(itemFullStaticPath);
        }catch(err){
            console.log(`statSync error: ${err}`);
            return false;
        }

        if(itemDetails.stats.isDirectory()){
            itemDetails.icon = `<ion-icon name="folder"></ion-icon>`;
            [itemDetails.size, itemDetails.sizeBytes] = filesizeDir(itemFullStaticPath);
        }
        
        else if (itemDetails.stats.isFile()){
            itemDetails.icon = `<ion-icon name="document"></ion-icon>`;
            [itemDetails.size, itemDetails.sizeBytes] = filesizeFile(itemDetails.stats);
        }

        itemDetails.timestamp = parseInt(itemDetails.stats.mtimeMs);
        itemDetails.date = new Date(itemDetails.timestamp);
        
        itemDetails.date = itemDetails.date.toLocaleString();

        mainContent += `
        <tr data-name="${itemDetails.name}" data-size="${itemDetails.sizeBytes}" data-timestamp="${itemDetails.timestamp}">
        <td>${itemDetails.icon}<a href="${link}" id="name" target="${itemDetails.stats.isFile() ? '_blank' : ''}">${itemDetails.name}</a></td>
        <td id="size">${itemDetails.size}</td>
        <td id="modified">${itemDetails.date}</td>
        `
    })

    return [mainContent, itemDetails.name];
};



module.exports = BuildMainContent;