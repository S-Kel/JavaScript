// DYNAMIC OBJECTS
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
    return obj;
}

// Now we can use it to create any number of Person objects.
// It works, but it 's a bit cumbersome ...
let person1 = createNewPerson('John');
let person2 = createNewPerson('Mary');
person1.greeting();


// 2. CONSTRUCTOR FUNCTIONS - BETTER WAY

// Enter the Javascript equivalent of a class with an initialize method - 
// the constructor function.
function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}


// NEW MAKES IT A CONSTRUCTOR FUNCTIONS
// By calling the function, JS will create a new instance of Person and
// return it to the caller.
let p1 = new Person('Sarah');
let p2 = new Person('Bob');
p2.greeting();