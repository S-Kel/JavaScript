// THE PROTOTYPE: THIS OPEN UP THE OBJECT AND NEW METHODS TO IT

/* One issue with the previous example is that p1 and p2 both have their own  copy of the greeting method, since this.greeting is set every time(check it out on console!).

  This is far from ideal - it 's not DRY!

  We can avoid this by assigning common properties and methods to a special prototype object that automatically exists within all JS objects.

  THE PROTOTYPE
  The prototype serves as the template or blueprint
  for a group of objects, and is roughly equivalent to a Ruby class.

  function Person(name) {
    this.name = name
  }

  Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name + '.');
  }
  Note that we must move the method definition outside of the constructor, and prefix it with the name of the 'class'
  and the prototype property.

  Now there will be only one copy of greeting which will be shared by all instances of Person.

  We can use the same syntax to set a shared variable.

  THE PROTOTYPE
  A handy feature of JS is that we can modify prototypes on the fly, and any existing instances will automatically update with the changes.

  This even works on built - in objects.
  */
function Person(name) {
    this.name = name;
}

Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
}
Number.prototype.cube = function() {
    return this * this * this;
}

let x = 2;
x.cube(); // 8