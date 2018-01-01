/*
	index.js
*/
"use strict";
// msgs = "this should not work";

var msg = "Hello Learn JavaScript";
console.log(msg);
console.log("msg is " + typeof(msg)); 

var resultDev = document.getElementById("results");
resultDev.innerHTML = "<p>This is from JavaScript</p>";
console.log("resultDev is " + typeof(resultDev )); 

var none;
console.log("none is " + typeof(none)); 
if (none == undefined) {
	console.log("nono is undefined");
}

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));
if (aNumber === 10)
{
	console.log("aNumber is a number of value 10");
}

// functions

function showMsg(msg1, msg2) {
	if (msg2)
		console.log("ShowMsg: " + msg1 + ", and " + msg2);
	else
		console.log("ShowMsg: " + msg1);
}
showMsg("Some info", "2");

var showIt = function(msg, more) {
	showMsg(msg, more);
}
showIt("a", "b");

function showItThen(msg, callback) {
	showIt(msg);
	callback();
}
showItThen("showItThen is called", function() {
	console.log("callback is then called");
});


// Objects

var myObject = {
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function () {

	},
	owner: {
		login: "sdf",
		id: 1344
	}
};
myObject.phoneNumber = "123-456-1234";
console.log(myObject.phoneNumber);


// Arrays

var myArrays = [];
myArrays.push(myObject);
myArrays.push({});
console.log(myArrays.length);

for (var i = 0; i < myArrays.length; i++) {
	console.log(myArrays[i]);
}

