//Packages/Modules
const { readFile, writeFile } = require('fs/promises');
const getInput = require('./lib/getInput.js');
const generateSVG = require('./lib/generateSVG.js');
const { Circle, Triangle, Square } = require('./lib/shapes.js');


function init() {
    getInput().then((response) =>
        console.log(response)
    );
}

init();