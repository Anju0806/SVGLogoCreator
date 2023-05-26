// Packages for this application
let inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

//Questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter a text(text can be upto three characters):',
        name: 'text',
        validate: function (value) {
            if (value.length == 0 || value.length > 3) {
                return 'Please enter a valid input:';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter the text color (color can be keyword OR a hexadecimal number)?',
        name: 'textcolor',
        validate: function (value) {
            // Regular expression for color keywords
            const colorKeywordRegex = /^(red|blue|green|yellow|orange|purple|pink|black|white|gray)$/i;
            // Regular expression for hexadecimal color codes
            const hexCodeRegex = /^#([0-9A-F]{3}){1,2}$/i;

            if (value.match(colorKeywordRegex) || value.match(hexCodeRegex)) {
                return true;
            } else {
                return 'Please enter a valid color';
            }
        }
    },
    {
        type: 'list',
        message: 'Please select a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],

        validate: function (value) {
            if (value.length == 0) {
                return 'Please enter a valid input';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter shape color (color can be keyword OR a hexadecimal number)?',
        name: 'shapecolor',
        validate: function (value) {
            // Regular expression for color keywords
            const colorKeywordRegex = /^(red|blue|green|yellow|orange|purple|pink|black|white|gray)$/i;
            // Regular expression for hexadecimal color codes
            const hexCodeRegex = /^#([0-9A-F]{3}){1,2}$/i;
            if (value.match(colorKeywordRegex) || value.match(hexCodeRegex)) {
                return true; 
            } else {
                return 'Please enter a valid color'; 
            }
        }
    },

];

//function to initialize app
function init() {
    fs.fchmod
    console.clear();
    console.log('Welcome to the SVGLogoCreator Application!');
    console.log('Lets generate custom SVG logos..');
    // Prompt the questions to the user
    inquirer.prompt(questions)
        .then((answers) => {
            let shape;
            switch (answers.shape) {
                case 'circle':
                    shape = new Circle();
                    break;
                case 'triangle':
                    shape = new Triangle();
                    break;
                case 'square':
                    shape = new Square();
                    break;
                default:
                    break;
            }
            shape.setShapeColor(answers.shapecolor)
                .then(() => shape.setText(answers.text, answers.textcolor))
                .then(() => shape.saveSvgHeader())
                .then(() => shape.addSvgData())
                .then(() => shape.saveSvgText())
                .then(() => {
                    console.log(" Generated logo.svg successfully..");
                })
                .catch((error) => {
                    console.error("An error occurred:", error);
                });
        })
        .catch((error) => {
            console.log('An error occurred:', error);
        });
}
init();
