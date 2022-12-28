let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;

const person: {
  name:string;
  age:number;
} = {
  name:'Jack',
  age:21,
};

const fruits:string[] = ['Apple','Banana','Grape'];

const book:[string,number,boolean] = ['business',1500,false];

enum coffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
};

const coffee = {
  hot:true,
  size:coffeeSize.TALL,
};

coffee.size = coffeeSize.SHORT;

console.log(coffeeSize.SHORT);

let anything:any = true;
anything = 'hello';

let unionType:number | string = 10;
unionType = 'hello';
unionType.toUpperCase();

let unionTypes:(number | string)[] = [21,'hello'];

type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple'

let clothSize:ClothSize = 'large'

const cloth:{
  color:string;
  size:ClothSize;
} = {
  color:'white',
  size:'medium',
};

function add(num1:number,num2:number):number{
  return num1 + num2;
};

const minus = (num1:number,num2:number):number =>{
  return num1 - num2;
};

function sayhello(){
  console.log('Hello');
};

console.log(sayhello());
let amp:undefined;

const anatherAdd:(n1:number, n2:number) => number = add;

const doubleNumber = (number:number):number => number * 2;
const doublenumber2:(num:number) => number = number => number * 2;
console.log(doublenumber2(5));

function doubleAndHandle(num:number,cb:(num:number) => number):void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
};
doubleAndHandle(3,(double:number) =>{
  return double;
});

let unknownInput:unknown;
let anyInput:any;
let text:string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;

if(typeof unknownInput === 'string'){
  unknownInput
}

function error(message:string):never{
  throw new Error(message);
};
