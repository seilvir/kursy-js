//Słowo kluczowe this odnosi się do obiektu wywołującego, który zapewnia dostęp do właściwości obiektu wywołującego
//wstep do obiektów (wyglada troche jak taka pseudoklasa)
//tutaj operator  w this przypomina operator self (referncje)
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  whatlike(eat2)
  {
    let eating2=eat2
    let eat=this.dietType
    console.log('Eating to ', eating2,'natomiast koza je ',eat)
  }
};
const wykonajwhatlike=goat.whatlike("zielsko")


//W JAVA SCRIPT NIE MA Podzialu na wlasciwosci i metody publiczne i prywatne - istnieje jedynie konwecja ze to co ma byc 
//prywatne oznaczamy znakeim podkreslenia _np:
const robot = {
  _energyLevel: 100, //tutaj zmienna _energyLevel ma być traktowana jako zmienna o zasiegu prywatnym
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};