const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const stream = new fs.ReadStream(filePath, {encoding: 'utf-8'});

stream.on('readable', () => {
  let data = stream.read();

  if(data === null) {
    return;
  } else {
    console.log(data);
  }
});