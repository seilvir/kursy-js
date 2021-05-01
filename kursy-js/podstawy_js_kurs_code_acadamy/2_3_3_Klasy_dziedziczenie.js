//https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/inheritance-i
//Klasa rodzica
class Animal {
    constructor(name) {
        console.log("Jestem z klasy ANimal poczatek")
      this._name = name;
      this._behavior = 0;
      console.log("Jestem z klasy Animal koniec")
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }
    static metoda_statyczna() //skladnia dla metody statycznej
    //tworzona po to zeby klasa miała metody, które nie są dostępne w poszczególnych instancjach, ale możesz je wywołać bezpośrednio z klasy. metoda po prostu nie ma wymaga utworzenia nowej instancji, nie korzysta z własności klasy ani nie jest zależna od innych metod. 
    {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random()*5);
        return names[randomNumber];
    }
    
   
    incrementBehavior() 
    {
      this._behavior++;
    }
    jakas_tam_metoda()
    {
        console.log("Wywolanie jakiejs tam metody")
        return 'Return z Wywolanie jakiejs tam metody ANimal'
    }
//Klasa dziecka
  } 
  class Cat extends Animal { //rozszerzenie klasy Cat o klase Animal. zapis rozszezenia w JS
    constructor(name, usesLitter) { //czy konstruktor klasy potomnej musi uwzgledniac to co przekazuje construktor klasy rodzica ?
      console.log("Jestem z klasy CAT poczatek")
        super(name); // Słowo kluczowe super wywołuje konstruktora klasy nadrzędne 
        //(najpierw wykona sie poczatek klasy CAT potem potem poczatek klasy Animal nastepnie koniec klasy Animal i na koncu koniec klasy Cat)
     // W konstruktorze () musisz zawsze wywołać metodę super, zanim będziesz mógł użyć słowa kluczowego this - jeśli tego nie zrobisz, JavaScript zgłosi błąd odwołania. A
        this._name='Inne imie '
        this._usesLitter = usesLitter;
    }
    jakametodacat()
    {
        return "Return metoda jaka metoda cat"
    }
  }

class Dog extends Cat { //dziedzieczenie klasy z Cat ktora dziedziczy z klasy Animal
    constructor(name) {
      super(name);
    }
    calkkiem_nowy_pies()
    {
        return "hau hau z klasy DOG"
    }
  }

const bryceCat = new Cat('Bryce', false);  // utworzenie nowego obiektu (a przy tym uruchomienie konstruktora klasy CAT)
console.log(bryceCat._name); // output: Bryce
console.log(bryceCat.jakas_tam_metoda()) //tutaj od razu tez zostanie zwrocony return - czyli najpierw wykona sie cialo metody a potem zostanie zwrocony return

const nowypies= new Dog("Piesek",true)
console.log(nowypies.jakametodacat())
console.log(nowypies.calkkiem_nowy_pies()) //zwroci "hau hau z klasy DOG"

console.log("loosowe imie z metody statycznej ",Animal.metoda_statyczna())//wywolanie metody statycznej bez potrzeby tworzenia obiektu