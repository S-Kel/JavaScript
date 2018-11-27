// JS CALLBACKS

// A callback function is a regular JS function that is passed to a second
// function.The second function will run the callback when it 's finished.
let sayHello = function(name) {
    console.log("Hello, " + name + "!");
}

let textAFriend = function(name, callback) {
    callback(name);
}

//call the function with a named callback function
textAFriend("John", sayHello);