//Packages/Modules
const getInput = require('./lib/getInput.js');
const { generateSVG, writeSVG } = require('./lib/generateSVG.js');
const { shapeSelect } = require('./lib/shapes.js');


function init() {
getInput()
    .then((response) => shapeSelect(response))
    .then((selectedShape) => {
        writeSVG('./examples/example.svg', generateSVG(selectedShape))
    })
};

//next you need to pass selected shape to generate svg and then pass that to writeFile

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