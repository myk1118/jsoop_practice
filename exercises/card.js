class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.storage = [];
		//takes in nothing
		//make storage for your card objects
	}
	addCard(suit, faceValue) {
		var newCard = new Card(suit, faceValue);
		this.storage.push(newCard);
		return this.storage.length;
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle() {
		for (var i = this.storage.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i+1));
			var temp = this.storage[i];
			this.storage[i] = this.storage[j];
			this.storage[j] = temp;
		}
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount() {
		return this.storage.length;
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards(numberOfCards) {
		var newDeck = [];
		while (numberOfCards > 0 && this.storage.length > 0) {
				var currentCard = this.storage.pop();
				newDeck.push(currentCard);
				numberOfCards--;
		}
		return newDeck;
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
	}
}

var test = new Deck();