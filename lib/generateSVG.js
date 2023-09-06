//Packages
const fs = require("fs");

//Return string of code that will be written into the svg file
function generateSVG (response) {
    return `<svg width='300' height='200'>
    ${response.render()}
    <text x="150" y="100" font-size="40" text-anchor="middle" alignment-baseline="middle" fill=${response.textColor}>${response.text}</text>
    </svg>`
}

//write svg file
function writeSVG(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created logo.svg')
    )
};

//export functions
module.exports = {
    generateSVG,
    writeSVG
};