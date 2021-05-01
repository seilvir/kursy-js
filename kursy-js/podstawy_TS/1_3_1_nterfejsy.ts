/* W najprostrszy sposob interfejs to szablon w jaki tworzony jest obiekt 
*/
//tutaj tworzymy interfejs MESSAGE
interface Message {  
    text:string;
    sender:string;
    receiver:string;
    metoda_wymuszona():string; //czyli wymusza sie tutaj zeby return byl stringiem
    drug_metoda_wymuszona(zmienna:string); //tutaj bez wymuszonego returna
}
//tutaj tworzony jest nowa zmienna bedaca obiektem na podstawie interfejsu Message
const nowy_obiekt_na_podstawie_Message : Message = {  
    text: 'Hello',
    sender: 'Michal',
    receiver: 'Anna',
    metoda_wymuszona()
    {
        return 'tekst';
    },
    drug_metoda_wymuszona(zmienna: String ='tekst')
    {

        console.log(zmienna)
    }
};
