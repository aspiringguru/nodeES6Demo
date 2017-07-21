/*
modified from https://scotch.io/tutorials/better-node-with-es6-pt-i
minor additions for clarification by https://github.com/aspiringguru

to execute : node ./demo1.js

requires strict to try this in Node (??: same output when disabled)
*/
//"use strict";

var foo = "foo";//declared w var - thus global

function baz() {
    if (foo) {
        var bar = "bar";//bar is usable anywhere within function baz because declared w var
        let foobar = foo + bar;//NB: foobar cannot be seen outside this if block because declared w let
    }
    // Both foo and bar are visible here
    console.log("This situation is " + foo + bar + ". I'm going home.");//works

    try {
        console.log("This log statement is " + foobar + "! It threw a ReferenceError at me!");
    } catch (err) {
        console.log("You got a " + err + "; no dice.");//error happens, this prints
    }

    try {
        console.log("Just to prove to you that " + err + " doesn't exit outside of the above `catch` block.");
    } catch (err) {
        console.log("Told you so.");//error happens, this prints
    }
}

baz();

try {
    console.log(invisible);
} catch (err) {
    console.log("invisible hasn't been declared, yet, so we get a " + err);//error happens, this prints
}
let invisible = "You can't see me, yet"; // let-declared variables are inaccessible before declaration


let visible = "can you see me??"; //NB: let-declared variables are inaccessible before declaration
try {
    console.log("visible:", visible);
} catch (err) {
    console.log("invisible hasn't been declared, yet, so we get a " + err);//error happens, this prints
}

try {
    console.log("invisible2:", invisible2);//this prints 'invisible3: I am var invisible3'
} catch (err) {
    console.log("invisible hasn't been declared, yet, so we get a " + err);//error happens, this prints
}
var invisible2 = "I am var invisible2"; // var-declared variables are inaccessible before declaration
//NB tutorial says var variables should be hoisted.


var invisible3 = "I am var invisible3"; 
try {
    console.log("invisible3:", invisible3);//this prints 'invisible3: I am var invisible3'
} catch (err) {
    console.log("invisible3 hasn't been declared, yet, so we get a " + err);//error happens, this prints
}

/*
//error occurs before execution
try {
    const aa
    console.log("__________this does not print due to error in previous line_________");
} catch (err) {
    console.log("aa hasn't been assigned a value, so we get a " + err);//error happens, this prints
}
*/

try {
    const aa = 0
    aa = 1
    console.log("__________this does not print due to error in previous line_________");
} catch (err) {
    console.log("cannot change value of a const, so we get a " + err);//error happens, this prints
}
