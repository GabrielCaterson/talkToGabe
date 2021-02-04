//


//let targetUser = "whyZaya";
let targetUser = "whyZaya";
let inputFile = "AY-general-dataset.json";
//let inputFile = "my-chats-test.json";
//let outputFile = "my-chats.json";
let outputFile = "whyZaya_dataset.json";




var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');






var getStream = function () {
	//var jsonData = 'my-chats-test.json', //For testing
	//var jsonData = 'AY-general-dataset.json',
	var jsonData = inputFile,
		stream = fs.createReadStream(jsonData, { encoding: 'utf8' }),
		//parser = JSONStream.parse('*');
		parser = JSONStream.parse("messages");
		//parser = JSONStream.parse(messages[0]);
  return stream.pipe(parser);
};

let myMessages = {
	"messages": {}
};

getStream()
	.pipe(es.mapSync(function (data) {
		console.log("---test");
		//console.log(data);



		let iterator = 0;
		const iterate = (obj) => {
			console.log("------------- number of messages: " + obj.length)
		  Object.keys(obj).forEach(key => {
				if (key % 100000 == 0) {

					console.log(" --- --- --- " + key + " - " + obj[key].author.name + ": " + obj[key].content);
					console.log(" ");
				}


				if (obj[key].author.name === targetUser){
					if (iterator % 500 == 0) {

						console.log(key + " - " + obj[key].author.name + ": " + obj[key].content);
						console.log(" ");

					}
					myMessages.messages = {...myMessages.messages,
						[iterator]: {
							"name": obj[key].author.name,
							"content": obj[key].content
						}
					}
					iterator++;
				}

		  });
		}

		//iterate(AYMessages.messages);
		iterate(data);
	//	iterate(data.messages);
		//console.log(myMessages);


		let myMessagesJSON = JSON.stringify(myMessages);
		fs.writeFileSync(outputFile, myMessagesJSON);


	}));
