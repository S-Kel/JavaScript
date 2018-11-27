// CLASSES

// ES6 provides classes as 'syntactic sugar'.Under the hood, 
// the JS runtime is still creating prototype - based objects.

// LET 'S DEVELOP IT
// Refactor your Recipe object using classes.
// RESOURCES
// Mozilla class reference
// W3Schools JS in -browser practice exercises
// W3Schools tutorial on objects

class Rectangle {
    constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        // Getter
    get area() {
            return this.height * this.width;
        }
        // Method
    scale(ratio) {
        this.width *= ratio
        this.height *= ratio
    }
}

const square = new Rectangle(10, 10);
console.log(square.area); // 100
square.scale(0.5)
console.log(square.area); // 25