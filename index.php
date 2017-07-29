<!DOCTYPE html>
<html>

	<head>
		<title>JavaScript Objects, Functions, Closures and Prototypes</title>
		<link rel="stylesheet" type="text/css" href="node_modules/foundation-sites/dist/css/foundation.min.css">
	  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	  	<script src="js/custom.js"></script>
	</head>

	<body>
		<form>
			1st Number : <input type="text" id="firstNumber" /><br>
			2nd Number: <input type="text" id="secondNumber" /><br>
			<input type="button" onClick="multiplyBy()" Value="Multiply" />
			<input type="button" onClick="divideBy()" Value="Divide" />
			<input type="button" onClick="addTo()" value="Add">
			<input type="button" onClick="subBy()" value="Sub">
			<input type="button" onClick="addTo()" value="ClickClock">
		</form>
		<p>The Result is : <br>
			<span id = "result"></span>
		</p>

		<p id="demo"></p>
		<script>
			//objects
				var person = {
				    firstName : "John",
				    lastName  : "Doe",
				    age       : 50,
				    eyeColor  : "blue"
				};

				document.getElementById("demo").innerHTML =
				person.firstName + " is " + person.age + " years old.";
		</script>
		<!-- scripts for foundation -->
		<script type="text/javascript" src="node_modules/foundation-sites/dist/js/foundation.min.js"></script>
		<script>
		$(document).foundation();
		</script>
		<!-- end scripts for foundation -->

	</body>

</html>