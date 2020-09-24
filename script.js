/*************************************
// Function constructor/ Prototypes
*/


// let john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth)
  }

Person.prototype.lastName = 'Smith';
Person.prototype.hasDog = true;

let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
console.log(john.hasDog);
console.log(jane.hasDog);
console.log(mark.hasDog);












