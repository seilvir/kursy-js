//tutaj jest troche inny zapis poniewaz od razu tworzymy jeden obiekt module.exports
/*
module.exports = {
    specialty: "Roasted Beet Burger with Mint Sauce",
    getSpecialty: function() {
      return this.specialty;
    } 
  }; 
*/
//w JS mozna tez zrobic eksport deafault czyli np
/*
let Menu = {};
 
export default Menu;
*/

//export default jest nowsze wspierane przez ES6 skladnia eksportu obiektow zamiast rowniez wspieranej z Node.js module.exports
let Airplane = {};
//przekazanie do tablicy availableAirplanes w tablicy kilku obiektow 
Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane;// Zwykle dzieli się je na jedną z dwóch technik, domyślny eksport i nazwane eksportowanie.
