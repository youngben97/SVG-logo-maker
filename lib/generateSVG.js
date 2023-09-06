const fs = require("fs");

function generateSVG (response) {
    return `<svg width='300' height='200'>
    ${response.render()}
    <text x="150" y="100" font-size="40" text-anchor="middle" alignment-baseline="middle" fill=${response.textColor}>${response.text}</text>
    </svg>`
}

function writeSVG(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created example.svg')
    )
};

module.exports = {
    generateSVG,
    writeSVG
};