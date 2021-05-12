//przyklad funkcji napisanej w sposob natywny(wbudowny). Sklada sie z 2 promisow i then
function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}

//Ponizej ta sama funkcja tylko napisana w sposob async await
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
/*w zasadzie polega na wygodniejszym/czytelniejszym napisaniu tak ze najpierw jest wykonywana funkcja nr 1 z await i przekazuje wynik Promise
nastepnie wywolywana jest kolejna funkcja z wynikiem promisa z 1 funkcji. Inaczej mowiac .then() tak naprawde jest zastapione funkcjami await 
i sa wykonywane jeden po drugim tak ze nie potrzeba pisac operatora .then a do tego wygladaja jakby byly napisane w sposob synchroniczny */

/* Tlumaczenie ze storny codeacadamy:
Oznaczamy naszą funkcję jako asynchroniczną. Wewnątrz naszej funkcji tworzymy zmienną firstValue przypisaną await returnFirstPromise ().
 Oznacza to, że firstValue ma przypisaną rozstrzygniętą wartość oczekiwanej obietnicy. Następnie logujemy firstValue do konsoli. 
 Następnie tworzymy zmienną secondValue przypisaną do await returnSecondPromise (firstValue). W związku z tym secondValue jest przypisywana 
 ustalona wartość tej obietnicy. Na koniec logujemy secondValue do konsoli. Chociaż użycie składni async ... await może zaoszczędzić nam trochę
  czasu na pisaniu, redukcja długości nie jest głównym punktem. Biorąc pod uwagę dwie wersje funkcji, wersja async ... await bardziej przypomina 
  kod synchroniczny, który pomaga programistom w utrzymywaniu i debugowaniu kodu. Składnia async ... await ułatwia również przechowywanie i 
  odwoływanie się do rozstrzygniętych wartości z obietnic znajdujących się dalej w naszym łańcuchu, co jest znacznie trudniejszym zadaniem z
   natywną składnią obietnic. Utwórzmy kilka funkcji asynchronicznych z wieloma instrukcjami await! */
   const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
     resolve(beanType);
    }, 1000);
  });
  };
  
  let soakTheBeans = (beanType) => {
     return new Promise((resolve, reject) => {
      console.log('Time to soak the beans.');
      setTimeout(()=>{
        console.log(`... The ${beanType} beans are softened.`);
        resolve(true);
        }, 1000);
    });
  };
  
  let cookTheBeans = (isSoftened) => {
    return new Promise((resolve, reject) => {
      console.log('Time to cook the beans.');
      setTimeout(()=>{
        if (isSoftened) {
          console.log('... The beans are cooked!');
          resolve('\n\nDinner is served!');
        }
      }, 1000);
    });
  };
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();