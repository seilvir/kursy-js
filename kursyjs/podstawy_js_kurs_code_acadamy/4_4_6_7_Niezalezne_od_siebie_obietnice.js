//generalnie wyglada to tak ze dla Promise ktore czekaja na wartosc z innego Promisu dodajemy await przed wywolaniem tak jak ponizej

const {shopForBeans, soakTheBeans, cookTheBeans,steamBroccoli, cookRice, bakeChicken} = require('../moduly/library.js');
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

/*Natomiast jesli chcemy wywolac Promisy ktore sa od siebie niezalezne nie musimy uzywac konstrukcji tak jak powyzej (poniewaz najpierw
  wykonujemy Funckje shopForBeans a nastpenie druga funkcja soakTheBeans czeka na wynik pierwszej a potem trzecia) tylko tak jak ponizej
  nie uzywamy await przy wyolaniu promisa tylko przy wyolaniu zmiennej ktora jest przypisana do funkcji w consol logu z uzyciu await
  dzieki czemu obydwie funkcje beda wykonywaly sie w tym samym momencie asynchronicznie nie czekajac na to zwrocony wynik kazdej z nich 
  bo sa od siebie niezalezne */


  async function serveDinner() { //slowko kluczowe async dla funkcji asynchronicznych
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans(); //tutaj nie uzywa sie await
    //await uzywa sie przy wywolaniu funkcji w tym samym momencie 
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
   }
   
   serveDinner();