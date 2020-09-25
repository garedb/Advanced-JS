/*************************************
/ Function constructor/ Prototypes
*************************************/

/*
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
*/

/***********************************
/ Object.create
***********************************/

/*
let personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto,
{
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
*/

/************************************
/ Primatives vs Objects
************************************/
/*
//Primatives
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
let obj1 = {
  name: 'John',
  age: 26
}
let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
let age = 27;
let obj = {
  name: 'Jonas',
  city: 'Seattle'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

/*******************************************
/ Passing functions as arguments
*******************************************/

/*
let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/

/*****************************************
/ Functions returning functions
*****************************************/
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark');
*/

/*******************************************************
/ Immediately Invoked Function Expressions (IIFE)
*******************************************************/
/*
function game() {
  let score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/

/*
(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score)

(function (goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

/******************************
/ Closures
******************************/

/*
function retirement(retirementAge) {
  let a = ' years left until retirement.';
  return function(yearOfBirth) {
    let age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

let retirementGermany = retirement(65);
let retirementUS = retirement(66);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// retirement(66)(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');
*/


















