//packages
const inquirer = require('inquirer');

//use inquirer.prompt and return object with data
function getInput() {
    return inquirer.prompt([
    {
        name: 'text',
        message: 'Enter up to three characters for your logo',
        type: 'input',
        validate: (text) => {
            if(!text.length) {
                return 'No input detected. Enter up to three characters.';
            } else if (text.length > 3) {
                return 'Enter no more than three characters.';
            } else {
                return true;
            }
        }
    },
    {
        name: 'textColor',
        message: 'Enter a color for the logo text (color name or hexadecimal number)',
        type: 'input'
    },
    {
        name: 'shape',
        message: 'Select a shape for the logo',
        type: 'list',
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        name: 'shapeColor',
        message: 'Enter a color for the logo shape (color name or hexadecimal number)',
        type: 'input'
    }
]);
};

module.exports = getInput;