/* 
W tym przypadku  w niektórych warunkach instancje klasy Horse czy ShibaInu można traktować tak, jakby były instancjami klasy Animal
*/
class Animal {  
    constructor(protected name:String) {
        console.log("Konstruktor nr 1 z klasy Animal")
    }

    giveVoice() {
        console.log(`Nazywam sie ${this.name}! Metoda give voice z klasy Animal`);
    }
}

class Dog extends Animal {  
    constructor(protected name:String) {
        super(name);
        console.log("Konstruktor nr 2 z klasy Dog [dziedziczy ona z klasy Animal]")
    }

    giveVoice() {
        console.log('Szczek, szczek! Metoda givevoice nr 2 z klasy Dog');
        super.giveVoice();
    }

    eat() {
        console.log('Mniam.');
    }
}


class Horse extends Animal {  
    constructor(protected name:String) {
        super(name);
    }

    giveVoice() {
        console.log('Parsk, parsk!');
        super.giveVoice();
    }
}

//dziedziczenie poziom 2 czyli Animal --> Dog --> ShibaInu
class ShibaInu extends Dog {  
    constructor(protected name:String) {
        super(name);
        console.log("Wywolanie zawartosci konsturktora nr 3.1 z klasy ShibaInu")
    }

    giveVoice() {
        console.log('Jestem wywolaniem metody getVoice z klasy ShibaInu');
        super.giveVoice();
    }
    jestem_dodatkowa_metoda()
    {
        console.log("Jestem dodatkowa metoda metoda w klasie ShibaInu")
    }
}
//dziedziczenie poziom 2 czyli Animal --> Dog --> Pudel
class Pudel extends Dog {  
    constructor(protected name:string) {
        super(name);
        console.log("Wywolanie zawartosci konsturktora nr 3.2 z klasy Pudel")
    }

    giveVoice() {
        console.log('Jestem wywolaniem metody getVoice z klasy Pudel');
        super.giveVoice();
    }
}
//utworzenie 3 obiektow
const shibajakistam = new ShibaInu('Burek- jestem z obiektu shibajakistam');  
const obiekt_pudel = new Pudel("Jestem z obiekt_pudel")
const kon = new Horse('Jestem Rafał');  


//deklaracja nowej tablicy ktora przechowuje obiekty typu Animal (czyli z utworzonych obiektow gdzie klasa glowna jest Animal poniewaz wszystkie klasy wlasnie po niej dziedzicza)
const animals : Array <Animal> = [];  //gdzie const to nowa tablica przechowujaca obiekty z klasy animal - tutaj zadeklowana jest pusta tablica
animals.push(shibajakistam); //dodawania obiektow do tablicy
animals.push(obiekt_pudel);
animals.push(kon);
console.log("Po tym log nastpuje wykonanie petli for")
for (const animal of animals)
    {
        animal.giveVoice();
    }

/*
Wada takiego rozwiazania opisanego powyzej jest to jestesmy zmuszeni do wywolywania tylko takich metod ktore zostaly zadeklarowane w klasie rodzica (czyli w zasadzie tylko mozemy sie poslugiwac metoda
    giveVoice). Nie mozemy korzystac wywolywac metody zadeklrowanej tylko w klasie rodzica bo inne klasy jej nie maja (np klasa: jestem_doatkowoa_metoda w Klasie ShibaInu)
*/
const piesek= new Dog ("jakis tam pies")
piesek.eat() // ok!  
animals[0].eat() // błąd! widoczne są tylko metody z klasy Animal  