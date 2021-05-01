//Ponizej przyklad gettery czyli metody pobierajacej
//getter
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() //deklaracja gettera za pomoca kluczowego slowa get
    {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
}
console.log(person.fullName)


//setter
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) //ustawienei kluczowego slowa set
  {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);


//destruktor - polega 
const robotx = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robotx;
functionality.beep();