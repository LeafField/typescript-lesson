type Engineer = {
  name:string;
  role:string;
}

type Blogger = {
  name:string;
  follower:number;
}

type EngineerBlogger = Engineer & Blogger;

const quill:EngineerBlogger = {
  name:'Quill',
  role:'FrontEnd',
  follower:10000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x:string):string;
function toUpperCase(x:number):number;
function toUpperCase(x:string | number):string | number {
  if(typeof x === 'string'){
    return x.toUpperCase();
  }else{
    return x;
  }
};

interface TmpFunc {
  (x:string):string;
  (x:number):number;
};
const upperHello:TmpFunc = toUpperCase;
upperHello('hi');

// interface funcA {
//   (a:number,b:string):number;
//   (a:string,b:number):number;
// };
// interface funcB {
//   (a:string):number;
// };

// let intersectionFunc:funcA & funcB;
// intersectionFunc = function (a:number | string,b?:number | string) {return 0}

interface funcA {
  (a:number):number;
};
interface funcB {
  (a:string):string;
};

let unionFunc:funcA | funcB;



type Nomadworker = Engineer | Blogger;

function descrbeProfile(nomadworker:Nomadworker){
  console.log(nomadworker.name);
  if('role' in nomadworker){
    console.log(nomadworker.role);
  }
  if('follower' in nomadworker){
    nomadworker.follower;
  }
};

class Dog {
  kind:"Dog" = 'Dog';
  speak(){
    console.log('bow-bow');
  }
}
class Bird {
  kind:'Bird' = 'Bird';
  speak(){
    console.log('tweet-tweet');
  }
  fly(){
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet:Pet){
  pet.speak();
  switch(pet.kind){
    case 'Dog':
      pet.speak();
  }
  if(pet instanceof Bird){
    pet.fly();
  }
}

// const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement;
// (document.getElementById('input') as HTMLInputElement).value = 'aaaaaaa'
// const input = document.getElementById('input')!;

input.value = 'initial input value';

interface Designer {
  name:string;
  [index:string]:string;
};

const designer:Designer = {
  name:'aaaaa',
  role:'web'
}

interface DownloadedData {
  id:number;
  user?:{
    name?:{
      first:string;
      last:string;
    };
  };
};


const downloadedData:DownloadedData = {
  id:1
};

console.log(downloadedData.user?.name);

const userData = downloadedData.user ?? 'no-user';
type id = DownloadedData['id'];
enum Color {
  RED,
  BLUE
}

let target = 100;
let source = Color.RED;
target = source

function advancedFn(...args:readonly [number,string,boolean?,...number[]]){

}

advancedFn(5,'hi',false,2,3,45)

let milk = 'milk' as const;
let drink = milk;

const peter = {
  name:'peter',
  age:38,
} as const;

type PeterType = typeof peter;
