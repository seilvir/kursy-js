//tworzenie klasy Page w pliku page - zawsze zawieraja one najbardziej podstawowe uniwersalne metody dla naszych testow - np metoda ktora otwiera przegladarke/strone
//do tego zawsze taka klase ekrportujemy na zewnatrz oraz nie tworzymy w tym pliki instancji obiektu
module.exports = class Page {
    open(path){ //metoda open 
            browser.url(path);
        }
    
}
