# SCOPE
~~~
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.
~~~
# scope types
~~~
Three type of scope
1 Global scope
2 Function scope
3 Block scope

1 Global Scope= program write any where this is called global scope.

** Hoisting= JavaScript "feature" called hoisting.
** Shadowing= two variables named the same thing, but on different scopes which is called shadowing.

~~~
# Question
~~~
Look at the code below, and identify the scope the variable appears in:


var author = "Katherine Johnson";

function presentPaper (author, paperName) {
  return paperName + " by " + author;
}

console.log(presentPaper("Paul Stafford", "The Determination of Azimuth Angle at Burnout for Placing a Satellite over a Selected Earth Position"))

Which person appears as the author?


"Katherine Johnson"


"Paul Stafford"


undefined(ans)
~~~

# Question

~~~
var earth = {
  population: 7000000000,
  atmosphere: {
    nitrogen: 78,
    oxygen: 21,
    argon: .9,
    carbon: .03
  },
  averageTemperature: function () {
    return carbon * 6100;
  }
}

function pollute() {
  earth.atmosphere.carbon += .000001;
}

Which scope does earth, when referenced in the pollute function live in?


Global Scope(ANS)
Block Scope
local function
~~~


# BLOCK Scope
let and const variable declaration keywords.
The let statement declares a block scope local variable.
Ex=
let x = 1;

if (x === 1) {
  let x = 2;// block statement

  console.log(x);
  // expected output: 2
}

~~~s

let = they defined scope to the block.
var=they definded globally.
const=identifier can't be reassigned.


















