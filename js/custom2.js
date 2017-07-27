//constructor pattern for creating objects. 
function Fruit (theColor, theSweetness, theFruitName, theNativeToLand){
​	this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;
​
    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }
​
    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }
}
​//therefore you can create
var mangoFruit = new Fruit("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName();
mangoFruit.nativeTo();

var pineappleFruit = new Fruit("Browm", 5, "pineapple", ["UnitedStates"]);


//protptype pattern of creating objects
function Fruit () {
​
}
​
Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";
​
Fruit.prototype.showName = function () {
console.log("This is a " + this.fruitName);
}
​
Fruit.prototype.nativeTo = function () {
            console.log("Grown in:" + this.nativeToLand);
}

var mangoFruit = new Fruit ();
mangoFruit.showName(); 
mangoFruit.nativeTo();