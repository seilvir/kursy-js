//w JS tablice_asocjacyjne(w pythonie slownikk) sa znane pod nazwa obiektow - ktore tworza pary klucz wartosc
//jesli obiekt jest pzypisany jako const - to nie mozna zmieniac wartosci ale mozna je mutowac czyli dodawac nowe klucze i wartosci
let przykladowy_obiekt = {car_number:'VIN','fuel type':'Diesel'}

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver', //zapis klucza = pojedynczego wyrazu jako nazwa bez cudzyslowiow
    'Fuel Type': 'Turbo Fuel', //zapis dowolny stringa ze spacja jako klucza
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn',['io','Titan','galimedes']]
  };

let zmienna='asda'

//dostep do wartosci obiektu poprzez nazwe.klucz                {Wyjatkiem sa klucze ze spacja - tutaj trzeba uzyc zapisu klamrowego []}
spaceship.homePlanet='Terra' 
console.log(przykladowy_obiekt.car_number,przykladowy_obiekt["fuel type"]) // za pomoca kropki .  klucza  oraz za pomoca [""]
console.log(przykladowy_obiekt.car_number.length) // tutaj mozna uzywac wszystkich innych funkcji na wartosciach (tak jak w tab np lenght)
console.log('I will attack the '+spaceship.flightPath[3][1],'from ',spaceship['homePlanet']) // dostep do obiektu ktory ma w sobie tablice

//dostep poprzez nawiasy klamrowe ['nazwa_klucza] -
spaceship['homePlanet']='Ziemia'
console.log('\n',przykladowy_obiekt['car_number'],przykladowy_obiekt["fuel type"]) // za pomoca kropki .  klucza  oraz za pomoca [""]
console.log(przykladowy_obiekt['car_number'].length) // tutaj mozna uzywac wszystkich innych funkcji na wartosciach (tak jak w tab np lenght)
console.log('I will attack the '+spaceship['flightPath'][3][1],'from ',spaceship['homePlanet']) // dostep do obiektu ktory ma w sobie tablice

//usuwanie klucza za pomoca operatora delete 
delete spaceship.numCrew // tak sie usuwa klucz z obiektu 
delete zmienna // ale nie da sie usunac zmiennej
console.log("PO usunieciu",zmienna) //zmienna dallej wystwietla string w consol logu


// przyklad z codeacademy ktory pokazuje ze wartosc klucz:obiekt mozna przypisac do innej zmiennej (na przykladzie Active Mission)
let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true, // tutaj Active Mission jest kluczem obiektu spaceship2
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission'; //tutaj zamiast stringa Active Mission dochodzi do przypisania wartosci TRUE poniewaz 
  //Active mission jest kluczem w obiekcie spaceship2 i przyjmuje wartosc z tamtego obiektu czyli TRUE
  

  var isActive = spaceship2['Active Mission'] //standardowe przypisanie z obiekt.klucz
  console.log(spaceship2[propName]) //wyswietlu TRUE czyli wartosc obiektu spaceship["Active Mission"] - (zamiast stringa activemission)








