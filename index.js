//Packages/Modules
const getInput = require('./lib/getInput.js');
const { generateSVG, writeSVG } = require('./lib/generateSVG.js');
const { shapeSelect } = require('./lib/shapes.js');

//Initialize app
function init() {
getInput()
    .then((response) => shapeSelect(response))
    .then((selectedShape) => {
        writeSVG('./examples/logo.svg', generateSVG(selectedShape))
    })
};

//Call function
init();
