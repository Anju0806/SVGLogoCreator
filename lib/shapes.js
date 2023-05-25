const fs = require('fs');

class Shapes {
    setShape(shape,shapecolor){
        this.shape=shape;
        this.shapecolor=shapecolor;
        return Promise.resolve();
    }
    setText(text,textcolor){
        this.text=text;
        this.textcolor=textcolor;
        return Promise.resolve();
    }
    saveSvgHeader() {
        return new Promise((resolve, reject) => {
            let contentToAppend = `<svg version="1.1" \n width="300" height="200" xmlns="http://www.w3.org/2000/svg"> \n<rect width="300" height="200" stroke="black" fill="transparent"/>\n`;
            fs.writeFile('./logo.svg', contentToAppend, (err) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(); 
                }
            });
        });
    }
    saveSvgText() {
        return new Promise((resolve, reject) => {
            let contentToAppend = `<text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> \n</svg>`
            fs.appendFile('./logo.svg', contentToAppend, (err) => {
                if (err) {
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(); // Resolve the promise if the operation succeeds
                }
            });
        });
    }
}

class Circle extends Shapes {
    addSvgData() {
        return new Promise((resolve, reject) => {
            let contentToAppend = `<circle cx="150" cy="100" r="60" fill="${this.shapecolor}" stroke-width="2"/>\n`;
            fs.appendFile('./logo.svg', contentToAppend, (err) => {
                if (err) {
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(); // Resolve the promise if the operation succeeds
                }
            });
        });
    }
}

class Triangle extends Shapes {
    addSvgData() {
        return new Promise((resolve, reject) => {
            let contentToAppend = `<polygon points="155,35 240,160 65,160" fill="${this.shapecolor}" stroke-width="2" />\n`;
            fs.appendFile('./logo.svg', contentToAppend, (err) => {
                if (err) {
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(); // Resolve the promise if the operation succeeds
                }
            });
        });
    }
}

class Square extends Shapes {
    addSvgData() {
        return new Promise((resolve, reject) => {
            let contentToAppend = `<rect x="90" y="40" width="120" height="120" fill="${this.shapecolor}" stroke-width="2" />\n`;
            fs.appendFile('./logo.svg', contentToAppend, (err) => {
                if (err) {
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(); // Resolve the promise if the operation succeeds
                }
            });
        });
    }
}
// Export the classes
module.exports = {
    Circle,
    Triangle,
    Square
};



