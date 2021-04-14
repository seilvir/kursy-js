// funckja require - uzywana do importowania modulow w JS

import Airplane from "../moduly/4_3_exportdefault.js" //skladnia dla importowania danych z innego pliku

console.log("PRINTU",Airplane.availableAirplanes[0]['name']) //import z innego pliku zmiennej z obiektu i tablicy
function displayFuelCapacity()
{
    Airplane.availableAirplanes.forEach(jakaslosowanazwaiteratora =>
        {
        //iteruje wszysztkie obiekty w Airplane.availableAirplanes. Ogolnie najpewniej sie nie da zrobic zagniezdzonego foreach
         console.log('printu',jakaslosowanazwaiteratora['name'],jakaslosowanazwaiteratora['fuelCapacity'])
        }
        )
}
displayFuelCapacity()