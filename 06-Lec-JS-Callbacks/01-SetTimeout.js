const say = (name, callback) => {
        // simulate a long-running process, eg. fetch a remote URL
        setTimeout(() => {
            callback(name.toUpperCase());
        }, 3000);
    }
    // call the function with an anonymous callback function
say("John", (name) => {
        console.log("You are awesome " + name + "!");
    })
    // call it again, but do something different
say("Groot", (name) => {
    alert(`I am ${name}!`);
})
console.log('This can execute while waiting for say() to finish');