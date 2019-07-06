/**
 * 1. 定义基本类型
 */

//  import { Person } from './interface';


let str: string = '1';
let num: number = 0;
let bool: boolean = true;


/**
 * 1. 定义数组, 定义数组有两种方式
 *  (1)数组各元素类型相同
 * 
 */
let arr1: number[] = [ 1, 2, 3 ];
let arr2: Array<number> = [ 1, 2, 3 ];

let arr3: string[] = [ '1', '2' ]
let arr4: Array<string> = [ '1', '2' ];

/**
 * 1. 元组类型： 数组的一种， 元素可以是不同的类型的数据
 *  
 */
let arr5: [ number, string, boolean ] = [ 123, '123', true ];

/**
 * 1. 枚举类型
 * 
 */
enum Flag { success=1, error=0, processing=2 };

let success: Flag = Flag.success;
let error: Flag = Flag.error;

console.log( success, error );

enum Colors { blue, green=3, black=3 }

let blue = Colors.blue;
let green = Colors.green;
let black = Colors.black;

console.log( blue, green, black )

/**
 * 1. 任意类型
 */

 let any: any 
 /**
  * 1. undefined 类型
  * 
  */

  let type: number | undefined;

  console.log( type, 'type' );

 /**
  * 1. nerver 类型
  */


/*********************************
 * 1. 函数重载
 * 
 */
// function getInfo(param: string): string;
// function getInfo(param: number): number;
const getInfo = (param: any): any =>{
    return param;
}

// let person: Person = {
//   name: 'name',
// };

// 指定 constructor 的属性
class Memory {
  name: string;
  age: string;
  public sex: string;
  private work: ( a: string ) => string;
  constructor(n: string, a: string, s: string){
    this.name = n;
    this.age = a;
    this.sex = s;
    this.work = () => {
      return '0'
    }
  }
  prevZoeo = ( str: string ): string => str.padStart(2, '0')
}

const defer = (): any => new Promise( ( resolve: (a: any ) => void, reject )=> {
  setTimeout( () => {
    resolve( 10 );
  }, 1000 );
});


defer().finally( (data: any): void => {
  console.log( data ); 
})

class Static {
  id: number = 100;

  static id: string="static id";
  static getStaticId(): string{
    return this.id;
  }
  static getinstanceId(): number{
    return ( new this() ).id
  }

}

console.log( Static.getStaticId() )

class Animal{
  name: string;
  constructor( name: string ){
      this.name = name;
  }
  eat(){ 
      console.log('动物吃什么');
  }
}
class Dog extends Animal {
  constructor( name: string ){
      super( name )
  }
  eat(){
      return this.name + '吃肉'
  }
}
class Cat extends Animal {
  constructor( name: string ){
      super( name )
  }
  eat(){
    return this.name + '吃老鼠'
  }
}
const dog = new Dog("狗 ");
const cat = new Cat("猫 ");
console.log( dog.eat() );
console.log( cat.eat() );

/**
 * * 抽象方法
 * * 抽象方法和抽象类使用 关键字 abstract
 * * 抽象方法不具体实现， 只是一个标准基类
 * * 抽象方法只能在抽象类中使用
 * * 抽象类的子类 必须实现 抽象类的方法
 * 
 */
abstract class Abstract {
	public name: string;
	constructor(name: string ){
		this.name = name;
	}
    abstract eat(): any;
}

class AbsChild extends Abstract{
	constructor( name: string){
		super( name )
	}
	eat(){
		return '111'
	}
}

const abschild = new AbsChild( 'name' )





