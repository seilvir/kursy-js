//Klasy wstęp wstepna budowa klasy


class Dog { //slowko poprzedzajace deklaracje klasy - class nazwa klasy
  constructor(name) { //konstruktor (przyjmowane_wartosci_dla_konstruktora)
    this._name = name; //operator this. - referncja dla zmiennej _name = name (czyli taka jak self. w pythonie - pytanie czy aby na pewno nazwy nie moga byc takie same ?)
    this._behavior = 0;
  }

  get name() { //getter name 
    return this._name;
  }
  get behavior() { //getter behavir
    return this._behavior;
  }   

  incrementBehavior() { //metoda - czyli funkcja klasy
    this._behavior ++;
  }
}