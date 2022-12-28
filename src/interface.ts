// type AddFunc = (num1:number,num2:number) => void;
interface AddFunc {
  (num1:number,num2:number):number;
}
const addFunc:AddFunc = (num1,num2) =>{
  return num1 + num2;
};

interface Nameable {
  name:string;
  nickName?:string;
}

const nameable:Nameable = {
  name:'keisuke',
  nickName:'kei'
};

interface Human extends Nameable {
  age:number;
  greeting(message:string):void;
};

class Developer implements Human{
  constructor(public name:string,public age:number){

  }
  greeting(message: string): void {
      console.log(message);
  }
}

const tmpDeveloper = {
  name:'Quill',
  age:38,
  experiense:3,
  greeting(message:string):void {
    console.log(message)
  }
}

const user:Human = tmpDeveloper
