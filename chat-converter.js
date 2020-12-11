//








/*
const fs = require('fs');


var stream = fs.createReadStream("./AY-general-dataset.json", {flags: 'r', encoding: 'utf-8'});
var buf = '';

stream.on('data', function(d) {
    buf += d.toString(); // when data is read, stash it in a string buffer
    pump(); // then process the buffer
});

function pump() {
    var pos;

    while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
        if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
            buf = buf.slice(1); // discard it
            continue; // so that the next iteration will start with data
        }
        processLine(buf.slice(0,pos)); // hand off the line
        buf = buf.slice(pos+1); // and slice the processed data off the buffer
    }
}

function processLine(line) { // here's where we do something with a line

    if (line[line.length-1] == '\r') line=line.substr(0,line.length-1); // discard CR (0x0D)

    if (line.length > 0) { // ignore empty lines
        var obj = JSON.parse(line); // parse the JSON
        console.log(obj); // do something with the data here!
    }
}
*/






















/*
//let AYServerJSON = require('./my-chats.json');
const fs = require('fs');
//let rawdata = fs.readFileSync('my-chats-test.json');
console.log("before");
let rawdata = fs.readFileSync('AY-general-dataset.json');
console.log("after");

let AYMessages = JSON.parse(rawdata);


let myMessages = {
	"messages": {}
};


const iterate = (obj) => {
	console.log("------------- " + obj.length)
  Object.keys(obj).forEach(key => {
		if (key % 1000 == 0) {

			console.log(key + " - " + obj[key].author.name + ": " + obj[key].content);
		}
		myMessages.messages = {...myMessages.messages,
			[key]: {
				"name": obj[key].author.name,
				"content": obj[key].content
			}
		}

  });
}

iterate(AYMessages.messages);
console.log(myMessages);




let data = JSON.stringify(myMessages);
fs.writeFileSync('my-chats.json', data);
*/
