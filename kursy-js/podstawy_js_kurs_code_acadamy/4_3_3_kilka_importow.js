//  import {} from "sciezka" - w nawiasach klamrowych deklarujemy kilka zmiennych/funkcji etc ktore chcemy importowac
//ogolnie gdy importujemy obiekt nie musimy wskazywac nazwy obiektu glownego tak jak w export default
//mozna importowac kilka modulow w jednym pliku
import {availableAirplanes, flightRequirements, meetsStaffRequirements,inna_zmieniona_nazwa,jakastamzmiennazeksportu as zmieniona_nazwa} from '../moduly/4_3_kilkaexportow.js' //skladnia dla importowania danych z innego pliku
import Airplane from "../moduly/4_3_exportdefault.js" //skladnia dla importowania danych z innego pliku

console.log("PRINTU",Airplane.availableAirplanes[0]['name']) //import z innego pliku zmiennej z obiektu i tablicy
function displayFuelCapacity2()
{
    Airplane.availableAirplanes.forEach(jakaslosowanazwaiteratora =>
        {
        //iteruje wszysztkie obiekty w Airplane.availableAirplanes. Ogolnie najpewniej sie nie da zrobic zagniezdzonego foreach
         console.log('printu',jakaslosowanazwaiteratora['name'],jakaslosowanazwaiteratora['fuelCapacity'])
        }
        )
}
displayFuelCapacity2()
console.log('zmienna z pliku kilkaexportow o nazwie jakastamzmiennazeksportu ma wartosc ',zmieniona_nazwa,' oraz ',inna_zmieniona_nazwa) // tak jak w sql - jest nazwa_zmiennej as nowa nazwa - czyli jest to nadanie aliasu nazwy
//To samo słowo as możesz zastosować przy eksporcie, tak by innym ułatwić używanie naszego kodu:
console.log("PRINTU",availableAirplanes[0]['name']) //import z innego pliku zmiennej z obiektu i tablicy


function displayFuelCapacity()
{
    availableAirplanes.forEach(jakaslosowanazwaiteratora =>
        {
        //iteruje wszysztkie obiekty w Airplane.availableAirplanes. Ogolnie najpewniej sie nie da zrobic zagniezdzonego foreach
         console.log(' printy z foreach printu',jakaslosowanazwaiteratora['name'],jakaslosowanazwaiteratora['fuelCapacity'])
        }
        )
}
function displayStaffStatus(word) {
    let slowo = word
    availableAirplanes.forEach(element => {
     console.log(slowo+element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)) ;
    })};
displayFuelCapacity()
displayStaffStatus('Oto druga funkcja ')