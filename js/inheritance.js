//inheritance

function mammal(name){
	this.name = name;
	this.offspring = [];
}

mammal.prototype.haveABaby = function(){
	var newBaby=new Mammal("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
}

Mammal.prototype.toString=function(){ 
	return '[Mammal "'+this.name+'"]';
} 

Cat.prototype = new Mammal();        // Inheritance occurs 
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
function Cat(name){ 
	this.name=name;
}

Cat.prototype.toString=function(){ 
	return '[Cat "'+this.name+'"]';
} 

var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
alert('someAnimal is '+someAnimal);  
alert('myPet is '+myPet); 

myPet.haveABaby();                    
alert(myPet.offspring.length);         
alert(myPet.offspring[0]); 