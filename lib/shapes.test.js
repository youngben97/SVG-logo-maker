const { Circle, Triangle, Square } = require('./shapes.js');

describe('Shapes', () => {

    describe('Circle', () => {
        it('should return true if shape that would be rendered is a circle', () => {
            const shape = new Circle();

            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100"/>');
        });
    });

    describe('Triangle', () => {
        it('should return true if shape that would be rendered is a triangle', () => {
        const shape = new Triangle();

        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182"/>');
        });
    });

    describe('Square', () => {
        it('should return true if shape that would be rendered is a square', () => {
        const shape = new Square();

        expect(shape.render()).toEqual('<rect x="80" y="10" width="150" height="150"/>');
        });
    });
})

