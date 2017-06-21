// oversimplified model of a cat
function Cat() {
	this.stomach = [];
	this.hungry = true;
	this.eat = function(food) {
		this.stomach.push(food);
		this.hungry = false;
		console.log('Eating ' + food + '...');
	};
	this.deficate = function() {
		this.stomach = [];
		this.hungry = true;
		console.log('Pooping...');
	};
	this.meow = function() {
		console.log('MEOW MEOW MEOW');
	};
}


// driver code for cat
var cat = new Cat();
cat.meow();
cat.eat('avocado');
cat.eat('$$$');
cat.eat('the entire ocean');
console.log('the cat\'s stomach contains: ' + cat.stomach);
console.log('cat hungry? ' + cat.hungry);
cat.deficate();
console.log('the cat\'s stomach contains: ' + cat.stomach);
console.log('cat hungry? ' + cat.hungry);
cat.meow();
cat.meow();
cat.meow();
cat.meow();
