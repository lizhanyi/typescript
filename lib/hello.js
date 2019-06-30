"use strict";
/**
 * 1. 定义基本类型
 */
var str = '1';
var num = 0;
var bool = true;
/**
 * 1. 定义数组, 定义数组有两种方式
 *  (1)数组各元素类型相同
 *
 */
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ['1', '2'];
var arr4 = ['1', '2'];
/**
 * 1. 元组类型： 数组的一种， 元素可以是不同的类型的数据
 *
 */
var arr5 = [123, '123', true];
/**
 * 1. 枚举类型
 *
 */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
    Flag[Flag["processing"] = 2] = "processing";
})(Flag || (Flag = {}));
;
var success = Flag.success;
var error = Flag.error;
console.log(success, error);
var Colors;
(function (Colors) {
    Colors[Colors["blue"] = 0] = "blue";
    Colors[Colors["green"] = 3] = "green";
    Colors[Colors["black"] = 3] = "black";
})(Colors || (Colors = {}));
var blue = Colors.blue;
var green = Colors.green;
var black = Colors.black;
console.log(blue, green, black);
