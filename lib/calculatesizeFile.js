const calculatesizeFile = stats =>{
    let filesizeBytes = stats.size;//file size in bytes

    const units = 'BKMGT';
    const index = Math.floor(Math.log10(filesizeBytes)/3);

    let file_unit = units.substring(index, index + 1);

    filesizeBytes = filesizeBytes / Math.pow(1000, index);

    let filesize = parseFloat(filesizeBytes) + file_unit;


    if(isNaN(filesizeBytes)){
        file_unit = 'B';
        filesizeBytes = 0;
        filesize = `0${file_unit}`;
    }


    console.log(filesizeBytes);
    console.log(file_unit);
    console.log(filesize);
    
    return [filesize, filesizeBytes];
};



module.exports = calculatesizeFile;