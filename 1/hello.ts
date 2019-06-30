/**
 * 1. 定义基本类型
 */

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



