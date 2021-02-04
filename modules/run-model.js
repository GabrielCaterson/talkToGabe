const py = require('python-shell');


function launchPython() {
    return new Promise(fulfill => {
        let options = {
            args: ['--top-k 40', '--temperature 0.8', '--model_name general'],
            scriptPath: './gpt-2-finetuning/src',
            mode: 'text',
            pythonOptions: ['-u'],
						pythonPath: "Python3.7"
        };
        let pyshell = new py.PythonShell('interactive_conditional_samples.py', options);
        pyshell.on('message', function (message) {
            console.log("Python >>> " + message);
            if (message.includes("$:ready")) {
                console.log("Model prompted normally!");
                fulfill(pyshell);
            }
            if (message.includes("$:prompt:")) {
                handlePythonResponse(message);
            }
        });
        pyshell.on('stderr', function (error) {
            console.log(error);
        });
   });
}
let launchPythonValue;
launchPython().then((value) => {
	launchPythonValue = value;
});//What the heck do I do with this?

console.log("run-model.js");
console.log();
