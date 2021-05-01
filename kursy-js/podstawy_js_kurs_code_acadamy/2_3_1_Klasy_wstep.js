//Klasy wstęp wstepna budowa klasy


class Dog { //slowko poprzedzajace deklaracje klasy - class nazwa klasy
  constructor(name) { //konstruktor (przyjmowane_wartosci_dla_konstruktora)
    this._name = name; //operator this. - referncja dla zmiennej _name = name (czyli taka jak self. w pythonie - this.nazwa=nazwa)
    this.name=name //rowniez jest to poprawny zapis
    this._behavior = 0;
  }
//w klasie pomiedzy metodami nie umieszcza sie przecinkow 
  get aname() { //getter name 
    return this._name;
  }

  get behavior() { //getter behavir
    return this._behavior;
  }   

  incrementBehavior() { //metoda - czyli funkcja klasy
    this._behavior ++;
  }
}
const nowy_obiekt =new DOG('Reksio') // utworzenie obiektu - tutaj polega na dodaniu operatora new (nowej instancji) przed nazwa klasy (plus dane do constr)
const wywolajmetode = nowy_obiekt.behavior()
const wywolajargumentklasy=nowy_obiekt._behavior // wywolanie metod i argumentow 