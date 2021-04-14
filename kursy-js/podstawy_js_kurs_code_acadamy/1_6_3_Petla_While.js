//Struktura petli while - wykonuje sie dopoki warunek jest prawdziwy (dopoki jest spelniony)
let licznik = 1;
while (licznik <= 10)
{
  console.log(`Wykonanie petli nr ${licznik} !` )
  licznik++ ;//lub jak kto woli licnzik = licnzik + 1
}

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}