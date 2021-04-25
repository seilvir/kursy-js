/*
Klasy abstrakcyjne to klasy bazowe, po których można dziedziczyć, ale nie można ich instancjonować. 
Czym się więc różnią od interfejsów? Przede wszystkim klasy abstrakcyjne nie tylko zawierają deklaracje pól i metod, ale mogą też zawierać ich implementacje. 
Mogą, ale nie muszą. Idealnym kandydatem na klasę abstrakcyjną jest w takim razie wspomniana wcześniej klasa Animal, gdyż jej raczej nie chcemy instancjonować bezpośrednio. 
Dodajmy też do niej deklarację metody eat, ale bez implementacji (tzw. metodę abstrakcyjną). 
W ten sposób każda klasa pochodna będzie musiała zaimplementować eat:
*/

abstract class Animal {  
    constructor(protected name:string) {}

    giveVoice() {
        console.log(`Nazywam sie ${this.name}!`);
    }

    abstract eat():void;
}

const animal = new Animal(''); // blad!  