//generalnie wyglada to tak ze dla Promise ktore czekaja na wartosc z innego Promisu dodajemy await przed wywolaniem tak jak ponizej
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans');
   }, 1000);
 });
};

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli');
   }, 1000);
 });
};

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice');
   }, 1000);
 });
};

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken');
   }, 1000);
 });
};
//Promise.all () jest dobrym wyborem, jeśli wymaganych jest wiele zadań asynchronicznych, ale żadne z nich nie może czekać na inne przed wykonaniem.
/// tutaj zaczyna sie kod  z async all
async function serveDinnerAgain(){ //deklaracja funkcji async
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);  //deklaracja await oraz Promise.all i funkcji ktore beda zwracane
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`); 
  //wyswietlanie zwracanych wartosci w taki sposob jakbym chcial po prostu syswietlic elementu tablicy mozna tez uzywac innych petli itd
  for (let i = 0; i<foodArray.length; i++)
    {
      console.log('Wartosc z await promis.all dla danego elementu to ',foodArray[i]); 
    }
  }
serveDinnerAgain();