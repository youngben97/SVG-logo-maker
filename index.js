//Packages/Modules
const { readFile, writeFile } = require('fs/promises');
const getInput = require('./lib/getInput.js');
const generateSVG = require('./lib/generateSVG.js');
const { Circle, Triangle, Square, shapeSelect } = require('./lib/shapes.js');


function init() {
getInput()
    .then((response) => shapeSelect(response))
    .then((selectedShape) => {
        console.log(selectedShape)
    })
};


init();

// getInput()
//     .then((response) => shapeSelect(response))
//     .then((selectedShape) => {
//         console.log(selectedShape)
//     })

//getInput()
// .then((response) => {
//     const parsedResponse = JSON.parse(response);
//     return shapeSelect(parsedResponse);
// })
// .then((selectedShape) => {
//     console.log(selectedShape);
// })

// getInput()
// .then((response) => {
//     const selectedShape = shapeSelect(response);
//     console.log(selectedShape);
// })