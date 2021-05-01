//Struktura petli do while -najpierw wykonuje instrukcje w segmencie do a potem  wykonuje  to jest w instkrukcji while 
//jesli lub tak dlugo warun jest prawdziwy (dopoki jest spelniony). Instrukcje w do i While moga byc rozne (wtedy bedzie sie wykonywac insturkcja w 'do' 
//przy czym do i while wykonaa sie co najmniej raz )

//struktura kody gdy do i while robia rozne rzeczy 
let licznik = 1;
do 
{
  //wykona sie co najmniej raz + za kazdym spelnionym warunkiem
  console.log(`Ten consol log wykonuje sie w do  i instrukcja jest inna niz w petli while` )
  licznik++ ;//lub jak kto woli licnzik = licnzik + 1
  if (licznik == 5)
  {
      break; // przerywa petle 
  }
}
while (licznik == 10)
{
  //wykona sie tylko raz (niezaleznie od spelnienia warunku // po wszystkich instrukcjach powtorzonych w do)
  console.log(`Wykonanie petli nr ${licznik} !` )
  licznik=licznik + 3 ;//lub jak kto woli licnzik = licnzik + 1
}

//struktura kodu gdy do i while maja robic te same rzeczy
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
do {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}
while ( currentCard != 'spade') 