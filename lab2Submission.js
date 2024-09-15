//exe 1

let gretter = (myArray,counter) =>{
    var greetText = 'Hello';
    for (let x of myArray){
        console.log(greetText + x);
    }
}

gretter(["Ankitha","Akshitha","Simone"],3)

//exe 2
var firstCapital = (str) =>{
    const [first, ...rest] = [...str]; 
    return [first.toUpperCase(), ...rest].join('');
}

console.log(firstCapital("hello")); 
console.log(firstCapital('AnkithaRalla'))
//exe 3
const colors=['red','green','blue','yellow'];
firstCapital = colors.map(color => firstCapital(color));
console.log(firstCapital);

//exe 4
function filterLessThan20(arr) {
    return arr.filter(value => value >= 20);
}
var values = [1,60,21,19,5]
console.log(filterLessThan20(values))


//exe 5
const array = [1, 2, 3, 4];

const calSum = array.reduce((acc, currVal) => acc + currVal, 0);

console.log("Sum:", calSum)

const calProduct = array.reduce((acc, currVal) => acc * currVal, 1);

console.log("Product:", calProduct);

//exe 6
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
    details(){
        return "Model : " + this.model + " Engine " + this.year
    }
  }


  class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance = balance;
    }
    info(){
        return "" + this.model + " and balance is "+ this.balance
    }
  }

  const car2 = new Car('Honda civic',1976);
  console.log(car2.details());

  const sedan = new Sedan('Audi A4',2018,30000);
  console.log(sedan.info());
