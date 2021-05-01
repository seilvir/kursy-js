/* Podstawowe typy danych w TS to:
TypeScript pozwala na tworzenie pól i metod prywatnych. Domyślnie wszystkie elementy klasy są publiczne

 "protected daje taki sam rezultat jak private, za wyjątkiem sytuacji, w których korzystamy z dziedziczenia. Do pól zadeklarowanych 
 jako protected możemy uzyskać dostęp również z poziomu klas pochodnych, a do pól private nie."

*/

class Animal {  
    private name2:string = 'to jest przykladowy tekst'; //oznaczenie pola jako private i przypisanie mu typu string wraz z wartoscia 
    public name:string; //ozczaniecze pola jak publicznie dostepe i tylko deklarowanie ze istnieje bez przypisania wartosci (ale deklarowany jest info ze typ danych to string)
    constructor(givenName:string) { //utworzenie construktora ktory pobiera wartosc bedaca typowanym stringiem
        this.name = givenName;
    }

    
    private sayHello_prywatnie():string {  //metoda prywatna (nie pobiera wartosci) ktora zwraca string w return
        return `Hello, my name is ${this.name}!`;
}
    public sayHello():string {  
            return `Hello, my name is ${this.name}!`;
    }
}

const dog = new Animal('Burek');  //tworzenie nowego obiektu
dog.sayHello() // 'Hello, my name is Burek!';  //wylowanie obiektu wraz z metoda 