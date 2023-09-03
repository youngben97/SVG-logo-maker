//Packages/Modules
const getInput = require('./lib/getInput.js')
const { Circle, Triangle, Square } = require('./lib/shapes.js');


function init() {
    getInput().then((response) =>
        console.log(response)
    );
}

init();