const fs = require('fs');

class Shapes {
    constructor(text, textcolor) {
        this.text = text;
        this.textcolor = textcolor;
    }
    saveSvgHeader() {
        let contentToAppend=`<svg version="1.1" 
        width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" stroke="black" fill="transparent" />`;

        fs.writeFile('./logo.svg', contentToAppend, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
              return;
            }
        });
    }
    saveSvgText() {
        let contentToAppend=`<text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> </svg>` 
        fs.appendFile('./logo.svg', contentToAppend, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
              return;
            }
        });
    }
}


class Circle extends Shapes {
    constructor(answers) {
        super(answers.text,answers.textcolor);
        this.answers=answers;
    }
    addSvgCircle() {
        let contentToAppend=`<circle cx="150" cy="100" r="60" fill="${this.answers.shapecolor}" stroke-width="2"/> `;
        fs.appendFile('./logo.svg', contentToAppend, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
              return;
            }
        });
    }
}

class Triangle extends Shapes {
    constructor(answers) {
        super(answers.text,answers.textcolor);    
        this.answers=answers;
    }
    addSvgTriangle() {
        let contentToAppend=`<polygon points="160,40 220,160 100,160" fill="${this.answers.shapecolor}" stroke-width="2" />`;
        fs.appendFile('./logo.svg', contentToAppend, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
              return;
            }
        });
    }
}

class Square extends Shapes {
    constructor(answers) {
        super(answers.text,answers.textcolor);  
        this.answers=answers; 
    }
    addSvgSquare() {
        let contentToAppend=`<rect x="100" y="40" width="120" height="120" fill="${this.answers.shapecolor}" stroke-width="2" />`;
        fs.appendFile('./logo.svg', contentToAppend, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
              return;
            }
        });
    }
}

// Export the classes
module.exports = {
    Circle,
    Triangle,
    Square
};



