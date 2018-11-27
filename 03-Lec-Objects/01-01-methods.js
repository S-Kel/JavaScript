// OBJECT METHODS

// 1. Objects can also hold functions.
let jolene = {
    age: 21,
    hairColor: 'Auburn',
    talk: function() {
        console.log('Hello!');
    },
    eat: function(food) {
        console.log('Yum, I love ' + food);
    }
}

// 2. Call object methods using dot notation:
jolene.talk();
jolene.eat('pizza');