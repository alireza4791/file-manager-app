const {execSync} = require('child_process');

try{
    const result = execSync(`du -sh "/home/alireza/Projects/file explorer app"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}