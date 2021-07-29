//node modules
const {execSync} = require('child_process');


const calculatesizeDir = itemFullStaticPath =>{
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    const commandOutPut = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();

    let commandOutPutCleaned = commandOutPut.replace(/ /g, "");
    commandOutPutCleaned = commandOutPutCleaned.replace(/\t/g, "");

    let outputElements = commandOutPutCleaned.split('/');


    const sizeElement = outputElements[0];
    const sizeElement_type = sizeElement.slice(-1);
    const sizeElement_number = sizeElement.substring(0, sizeElement.length-1);

    let sizeElement_Byte = 0;
    
    if(sizeElement_type === 'M'){
        sizeElement_Byte = sizeElement_number * 1024 * 1024;
    }
    else if (sizeElement_type === 'K'){
        sizeElement_Byte = sizeElement_number * 1024;
    }
    else{
        sizeElement_Byte = sizeElement_number;
    }

    return [sizeElement, sizeElement_Byte];
};



module.exports = calculatesizeDir;