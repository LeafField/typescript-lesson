abstract class Person{
  protected static instance:Teacher;
  static species = 'Homo sapiens';
  static isAdult(age:number){
    if(age >17) return true;
    return false;
  }
  constructor(public readonly name:string,protected age:number){
  }

  greeting(this:Person){
    console.log(`Hello My name is ${this.name}, I'm ${this.age} years old.`);
    this.explainJob();
  }

  incrementAge(this:Person){
    this.age += 1;
  }
  abstract explainJob():void;
}

class Teacher extends Person {
  get subject() {
    return 'Music';
  }

  set subject(value){
    this._subject = value
  }

  private constructor(name:string,age:number,private _subject:string){
    super(name,age);
  }

  explainJob(): void {
      console.log(` I teach ${this._subject}`);
  }

  static getInstance(){
    Teacher.instance = new Teacher('quill',32,'Teacher');
    return Teacher.instance;
  }
};

const teacher = Teacher.getInstance();
