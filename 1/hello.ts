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

const defer = (): Promise<{}> => new Promise( resolve => {
  setTimeout( () => {
    resolve( 10 );
  }, 1000 );
});


defer().finally( ()=> {
  console.log(  ); 
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

/**
 * * 接口 *
 * * 接口是一种规范和标准，定义了某一类所需要遵守的规则
 * * 接口不关心这些类的内部状态，不关心内部实现的细节，只规范这批类必须提供的属性和方法
 * * typescript 接口类似 JAVA，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
 */

interface FullName {
  firstName: string;
  lastName: string;
}

/**
 * * 函数类型的接口 *
 * * ---- 接口规定 方法的 传参、返回值 ----
 * * (1) 对 json 的约束
 * * (2) 函数类型接口，可以批量约束
 * * (3) 可索引接口
 * * (4) 类类型接口
 * * (5) 接口扩展
 */

 /**
  * @param { key: string }
  * @param { value: string }
  */
interface encrypt {
  ( key: string, value: string ): string
}
const md5: encrypt = ( key, value ) => key + value;
const sha1: encrypt = (key, value ) => key + '--' + value;

const arr11: number[] = [ 1, 2, 3 ];
const arr12: Array<string> = [ '1', '2' ];
/**
 * * 可索引接口( 对数组 和 对象的约束 ) 
 */
interface userArr {
  [ index: number ]: string
}
const arr13: userArr = [ '1212' ];

interface userJson {
  [ index: string ]: string
}
const arr14: userJson = { 'name': 'name', age: 'age' };


/**
 * * 类类型接口( 对类的约束，与抽象类有点相似 )
 * 
 */
interface AAA{
  name: string;
  eat( str: string ): void;
}

class Pig implements AAA {
  name: string;
  constructor( name: string ){
    this.name = name;
  }
  eat(){
    return 
  }
}

const pig = new Pig( 'pig' );
pig.eat()

// ------------------------------
/**
 * * 接口扩展
 */
interface Animal2{
  eat(): void;
}
interface Person2 extends Animal2{
  work(): void;
}

class Web implements Person2 {
  public name: string;
  constructor( name: string){
    this.name = name;
  }
  eat(){
    console.log( this.name, 'name' );
  }
  work(){
    console.log( 'work' );
  }
}

class Programmer{
  public name: string;
  constructor( name: string ){
      this.name = name;
  }
  coding( code: string ){
      console.log( code, '123456789' );
  }
}








