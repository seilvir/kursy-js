//https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/npm-init
//https://docs.npmjs.com/about-npm/

/*
1) npm init  - tworzy plik package.json w glownym katalogu projektu. Plik package.json zawiera informacje o aktualnym projekcie JS w tym miedzy innymi
    * metadanych (tytul,opis,autor itd), 
    * lista paczek node (Lista pakietów węzłów wymaganych dla projektu - jeśli inny programista chce uruchomić Twój projekt, npm zagląda do pliku package.json i pobiera pakiety z tej listy.)
    * Pary klucz-wartość dla skryptów wiersza poleceń - możesz użyć npm, aby uruchomić te skrócone skrypty w celu wykonania jakiegoś procesu.
Zeby moc uzywac nmp najpierw trzeba zainstalowac node
Podczas inicjalizacji pliku package.json trzeba podac kilka podtawowych informacji. Dzieki temu utworzy sie plik package.json

2) Package.json jest znajduje sie w folderze projektu na tym samym poziomie co folder src czyli np:
    project
    |_ src
    |___ main.js
    |_ package.json

3) npm help json - 
4) npm install <package> --save (instalacji paczki jakiejs tam )
https://docs.npmjs.com/creating-a-package-json-file
https://developer.mozilla.org/pl/docs/Learn/Server-side/Express_Nodejs/development_environment

5) Instalacja paczki babel:
npm install babel-cli -D
npm install babel-preset-env-D

6) Po zainstalowaniu pakietow mozna znalezc wszystkie pakiety i ich zaleznosci w folderze 'node_modules'
7) W pliku package.json w '  "devDependencies": mozna znalezc informacje o nazwie zainstalowanych pakietow w projekcie
"devDependencies":
 {    "babel-cli": "^6.26.0",    "babel-preset-env": "^1.7.0"
  }
8) Tworzenie nowego pliku (mozna w konsoli uzyc polecnia touch nazwa_pliku) w katlogu projektu (kontynuacja korzystania z pakietu babel)
np touch .babelrc

9) W pliku package json w obiekcie scipts dodajemy  (w tym samym miejscu gdzie  zmienna test dodatkowo nowa zmienna np 
    "build":"babel src -d lib") [czyli jest to po prostu zmienna srodowiskowa w projekcie o nazwie build]
Wartość właściwości „babel src -d lib” jest metodą wiersza poleceń, która transponuje kod ES6 + do ES5. Rozważmy każdy argument w wywołaniu metody:
babel - Wywołanie polecenia Babel odpowiedzialne za transpilację kodu.
src - nakazuje Babel transpile całego kodu JavaScript w katalogu src.
-d - Nakazuje Babelowi zapisanie transpilowanego kodu do katalogu.
lib - Babel zapisuje transpiled kod do katalogu o nazwie lib.

10) Build - 
npm run build -Powyższe polecenie uruchamia skrypt kompilacji w pliku package.json.
                Babel zapisuje kod ES5 do pliku o nazwie main.js (zawsze ma taką samą nazwę jak oryginalny plik), 
                w folderze o nazwie lib
XI) Podsumowanie 
https://www.codecademy.com/courses/introduction-to-javascript/lessons/browser-compatibility-and-transpilation/exercises/review
*/





