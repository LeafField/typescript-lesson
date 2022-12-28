function copy<T extends {name:string,age:number},U extends keyof T>(value:T,key:U):T{
  value[key];
  return value
}
console.log(copy({name:'Quill',age:38},'name'));

type K = keyof {name:string;age:number;}

class LightDatabase<T extends string | number | boolean>{
  private data:T[] = []
  add(item:T){
    this.data.push(item)
  }
  remove(item:T){
    this.data.splice(this.data.indexOf(item),1)
  }
  get(){
    return this.data
  }
}
const stringLightDatabase = new LightDatabase<string>()
stringLightDatabase.add('apple')
stringLightDatabase.add('banana')
stringLightDatabase.add('grape')
stringLightDatabase.remove('banana')
console.log(stringLightDatabase.get())

interface TmpDatabase<T> {
  id:number;
  data:T[];
}

const tempDatabase:TmpDatabase<number> = {
  id:3,
  data:[32],
}

interface Todo {
  title:string;
  text:string;
}

type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>


const fetchData:Promise<string> = new Promise(resolve =>{
  setTimeout(() => {
    resolve('hello')
  }, 3000);
})

fetchData.then(data =>{
  data.toUpperCase();
})

const vegetables:Array<string> = ['Tomato','Broccoli','Asparagas']

interface ResponseData<T extends string = any>{
  data:T;
  status:number;
}

let tmp2:ResponseData

type MappedType = {
  [P in 'tomato' | 'pumpkin']:P
}

type ConditionalTypes = 'tomato' extends string ? string : boolean
