class Calculator {
	constructor() {
		this.operator = null;
		this.num = null;
		this.storage = [];
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator(operator) {
		if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
			this.operator = operator;
			return true;
		} else {
			console.log("Not an operator");
			return false;
		}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(number) {
		if (typeof number === "number" && this.storage.length < 2) {
			this.num = number;
			this.storage.push(this.num);
			return this.storage.length;
		} else {
			// console.log("Not a number");
			// console.log("Too many numbers stored");
			return false;
		}

		//!isNaN(number)
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate() {
		if (this.operator === '+') {
			var result = this.storage[0] + this.storage[1];
		} else if (this.operator === '-') {
			var result = this.storage[0] - this.storage[1];
		} else if (this.operator === '*') {
			var result = this.storage[0] * this.storage[1];
		} else if (this.operator === '/') {
			var result = this.storage[0] / this.storage[1];
		}
		this.storage = [];
		return result;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}

var test = new Calculator();