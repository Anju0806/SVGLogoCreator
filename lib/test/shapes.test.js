
const { Circle, Triangle, Square } = require('../shapes.js');

describe('Set Shape Color in Shape object', () => {
    test('should give Shape color', () => {
      const circle1 = new Circle();
      circle1.setShapeColor("blue");
      expect(circle1.shapecolor).toEqual('blue');
    });
  });

  describe('Set text and textcolor in Shape object', () => {
    test('should give the entered text', () => {
      const circle2 = new Circle();
      circle2.setText("svg","green");
      expect(circle2.text).toEqual('svg');
      expect(circle2.textcolor).toEqual('green');
    });
  });

describe('Shape Color in Circle', () => {
    test('should append the correct Shape color to contentToAppend', () => {
      const shape1 = new Circle();
      shape1.setShapeColor("green");
      return shape1.addSvgData().then((contentToAppend) => {
        expect(contentToAppend).toEqual('<circle cx="150" cy="100" r="60" fill="green" stroke-width="2"/>\n');
      });
    });
  });


  describe('Shape Color in Triangle', () => {
    test('should append the correct Shape color to contentToAppend', () => {
      const shape2 = new Triangle();
      shape2.setShapeColor("green");
      return shape2.addSvgData().then((contentToAppend) => {
        expect(contentToAppend).toEqual('<polygon points="155,35 240,160 65,160" fill="green" stroke-width="2" />\n');
      });
    });
  });

  describe('Shape Color in Square', () => {
    test('should append the correct Shape color to contentToAppend', () => {
      const shape3 = new Square();
      shape3.setShapeColor("green");
      return shape3.addSvgData().then((contentToAppend) => {
        expect(contentToAppend).toEqual(`<rect x="90" y="40" width="120" height="120" fill="green" stroke-width="2" />\n`);
      });
    });
  });
