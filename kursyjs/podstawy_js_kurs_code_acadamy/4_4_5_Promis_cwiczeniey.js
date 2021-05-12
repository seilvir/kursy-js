import {checkInventory} from '../moduly/4_3_kilkaexportow.js' //import

const order = [['sunglasses', 1], ['bags', 2]];

// funkcje dla handlerow ktore sa sukcesem oraz odrzuceniem warunku w promise
const handleSuccess = (resolvedValue) => { 
  console.log(resolvedValue);
};
const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order).then(handleSuccess).catch(handleFailure); //wywolanie promisa za pomoca then - nazwafunkcji_ktora_ma_promis(zmienna).then(handlersucces).catch(handlerFauilure)