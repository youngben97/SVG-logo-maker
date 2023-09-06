//Parent class
class Shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
;}

//inherit from shape class and adds render method
class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    }
};

//inherit from shape class and adds render method
class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
};

//inherit from shape class and adds render method
class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    render() {
        return `<rect x="80" y="10" width="150" height="150" fill="${this.shapeColor}"/>`
    }
};

//helper function to select correct shape
function shapeSelect (response) {
    const { text, textColor, shape, shapeColor} = response;

    if (shape === "Circle") {
        return new Circle(text, textColor, shape, shapeColor);
    };
    if (shape === "Triangle") {
        return new Triangle(text, textColor, shape, shapeColor);
    }
    if (shape === "Square") {
        return new Square(text, textColor, shape, shapeColor);
    }
};


module.exports = {
    Circle,
    Triangle,
    Square,
    shapeSelect
};