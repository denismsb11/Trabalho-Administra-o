const pdf = require('pdfkit');
const fs = require('fs');

var myDoc = new pdf;
myDoc.pipe(fs.createWriteStream('node.pdf'));

myDoc.font('Times-Roman').fontSize(48).text('NodeJS PDF Document', 50, 50);
myDoc.text('Fala tu!');
myDoc.end();