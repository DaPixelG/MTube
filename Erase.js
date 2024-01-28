const fs = require('fs');
const { extension } = require('mime-types');

function write(value, filename) {
    fs.writeFileSync(__dirname+'/'+filename, value);
}

let filess = [];
fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        if(file.includes('.mp4') == true){
            filess[filess.length] = file;
        }
    });
    console.log(filess);
    let indx = 0;
    while(indx<filess.length){
        fs.unlinkSync(__dirname + '/'+ filess[indx])
        indx++;
    }
});