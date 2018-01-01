
alert("Hello Firefox!");

confirm("Ok to continue?");

var yourlike = prompt("What would you like?");
if (yourlike === "tea") {
	;
} else {
	;
}

console.log("Program starts...");
console.warn("Warning!");
console.error("Error!!!'); 


typeof(4 < 2);
	"boolean"
typeof(x);
	"undefined"
var a_$ = 2;
typeof(a_$);
	"number" 
var ranNum = Math.random();

var myCoffee = {
	flavor: "expresso",
	temperature: "piping hot",
	ounces: 100,
	milk: true,

	reheat: function() {
		if (myCoffee.temperature === "cold") {
			mycoffee.temperature = "piping hot";
			alert("Your coffee has been reheated!");
		}
	}
};
mycoffee["temperature"] = "lukeworm";
myCoffee.temperature = "cold";
mycoffee.reheat();

function Friend(name, tshirtColor) {
	this.name = name;
	this.tshirtColor = tshirtColor;
}
var danny = new Friend("Denny", "green");


