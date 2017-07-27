	// 1. functions
	// 2. closures
	// 3.  objects
	
	//functions 
	function multiplyBy()
	{
	        num1 = document.getElementById("firstNumber").value;
	        num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 * num2;
	}

	// food for thought, i am not sure whether it is my code but JS actually is dividing and multiplying Strings!!!!!
	// Must check!!

	function divideBy() 
	{ 
	        num1 = document.getElementById("firstNumber").value;
	        num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 / num2;
	}

	function addTo()
	{
			x = document.getElementById("firstNumber").value;
			y = document.getElementById("secondNumber").value;
			num1 = parseInt(x);
			num2 = parseInt(y);
	document.getElementById("result").innerHTML = num1 + num2; 
	}

	function subBy()
	{
			x = document.getElementById("firstNumber").value;
			y = document.getElementById("secondNumber").value;
			num1 = parseInt(x);
			num2 = parseInt(y);
	document.getElementById("result").innerHTML = num1 - num2; 
	}

	//closures

	// starting with lexical scoping
	function init(){ // init is the outer function
		var name = 'mozilla for lexical scoping'; //this is a local variable created in init()
		function displayName(){ // displayName is the inner function
			alert(name); //inner function uses the outer function variable
		}
		displayName(); //calls inner function
	}
	init(); //calls the outer function

	//for closure
	function makeFunc(){
		var name = 'mozilla for closure';
		function displayName(){
			alert(name);
		}
		return displayName; //inner function is executed before the outer function executes.  Cool Right?!
	}
	var myFunc = makeFunc();
	myFunc();
	// after myFunc executes, variable name remains available for use.

	//more interesting....Liked this ;)
	function makeAdder(x){ //takes a single argument and returns a function
		return function(y){ // takes a single argument and returns the sum of the two function
			return x + y;
		};
	}

	var add5 = makeAdder(5);
	var add10 = makeAdder(10);

	alert(add5(2));
	alert(add10(2));


// In this case html needs to be loaded first or use window.onload
	// //objects
	// var person = {
 //    firstName : "John",
 //    lastName  : "Doe",
 //    age       : 50,
 //    eyeColor  : "blue"
	// };

	// document.getElementById("demo").innerHTML =
	// person.firstName + " is " + person.age + " years old.";
