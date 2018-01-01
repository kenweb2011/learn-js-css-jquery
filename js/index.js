/*
	index.js
*/
$(document).ready(function(){

"use strict";
// msgs = "this should not work";

var msg = "Hello Learn JavaScript";
console.log(msg);
console.log("msg is " + typeof(msg)); 

//var resultDev = document.getElementById("results");
//resultDev.innerHTML = "<p>This is from JavaScript</p>";
//console.log("resultDev is " + typeof(resultDev )); 

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
	showLog: function() {
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
myArrays.push({
	name: "jQuery UI",
	language: "JavaScript",
	score: 3.5,
	showLog: function() {},
	owner: { login: "sdf", id: 1344}
});
console.log(myArrays.length);

for (var i = 0; i < myArrays.length; i++) {
	console.log(myArrays[i]);
}


// jQuery

//var resultList = jQuery("#resultList");
var resultList = $("#resultList");
resultList.text("This is from $jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
	resultList.toggle(500);
	if (toggleButton.text() == "Hide") toggleButton.text("Show");
	else toggleButton.text("Hide");
});

var listItems = $("header nav li");
//listItems.text("testing jquery");
listItems.css("font-weight", "bold");
//$("header nav li:first").css("font-size", "18px");
listItems.filter(":first").css("font-size", "20px");

function displayResults(theArrays) {
resultList.empty();
$.each(theArrays, function(i, item) {
	var newResult = $("<div class='result'>" +
		"<div class='title'>" + item.name + "</div>" +
		"<div>Language: " + item.language + "</div>" +
		"<div>Owner: " + item.owner.login + "</div>" +
		"</div>");

	newResult.hover(function() {
		$(this).css("background-color", "lightgray");
	}, function() {
		$(this).css("background-color", "transparent");
	});

	resultList.append(newResult);
});
}


$("#gitHubSearchForm").on("submit", function() {

	var searchPhrase = $("#searchPhraseId").val();
	var useStars = $("#useStarsId").val();
	var langChoice = $("#langChoiceId").val();

	if (searchPhrase) 
	{
		resultList.text("Performing search...");

		//var githubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";
		var githubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);
		if (langChoice != "All")
		{
			githubSearch += "+language: " + encodeURIComponent(langChoice);
		}
		if (useStars) {
			githubSearch += "&sort=stars";
		}
		console.log(githubSearch);

		$.get(githubSearch)
			.success(function(r) {
				console.log(r.items.length);
				displayResults(r.items);
			})
			.fail(function(err) {
				console.log("Failed in the query!");
			})
			.done(function() {
				console.log("Query done.");		
			});

	}

	return false;
});



});