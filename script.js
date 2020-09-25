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

/************************************************
/ Bind, Call, and Apply
************************************************/

/*
let john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + 
      this.name + ', I\'m a ' +
      this.job + ', and I\'m ' +
      this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! How is it going? I\'m ' +
      this.name + ', I\'m a ' +
      this.job + ', and I\'m ' +
      this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

let emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


/********************************************
/ Coding Challenge 7
********************************************/

/*
--- Build a quiz game in the console ---

1. Build a function constructor called Questions to describe a question. A question
should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate
data structure here, array, object, etc.)
c) correct answer (Use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random questions and log it on the console, together with the possible
answers (each question should have a number) (Hint: write a method for the Question
objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should
input the number of the correct answer such as you displayed it on task 4.

6. Check if the answer is correct and print to the console whether the answer is correct
or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with the other programmers
code (Hint: we learned a special technique to do exactly that).

--- Expert Level ---

8. After you display the result, display the next random question, so that the game never
ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends, So include the option to quit
the game if the user writes 'exit' instead of the answer. In this case, DON'T call the
function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct,
add 1 point to the score (Hint: I'm going to use the power of closures for this, but you
don't have to, just do this with the tools you feel more comfortable at this point with)

11. Display the score in the console. Use yet another method for this.
*/

// First part of challenge
/*
(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer =
  function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!')
    } else {
      console.log('Wrong answer, try again')
    }
  }

  let q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  let q2 = new Question('Who is the most interesting man on Earth?', ['The Rock', 'VanDamme',
    'Gared'], 2);

  let q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'],
    2);

  let questions = [q1, q2, q3];

  let n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  let answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();
*/

// Extra section for challenge

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer =
  function(ans, callback) {
    let sc;

    if (ans === this.correct) {
      console.log('Correct answer!')
      callback(true);
      sc = callback(true);
    } else {
      console.log('Wrong answer, try again');

      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('-----------------------------------');
  }

  let q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  let q2 = new Question('Who is the most interesting man on Earth?', ['The Rock', 'VanDamme',
    'Gared'], 2);

  let q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'],
    2);

  let questions = [q1, q2, q3];

  function score() {
    let sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }
  let keepScore = score();
  
  function nextQuestion() {

    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = (prompt('Please select the correct answer.'));

    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }  

  nextQuestion();
  
})();








