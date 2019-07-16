"use strict";
/**
 * 1. 定义基本类型
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  import { Person } from './interface';
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
/**
 * 1. 任意类型
 */
var any;
/**
 * 1. undefined 类型
 *
 */
var type;
console.log(type, 'type');
/**
 * 1. nerver 类型
 */
/*********************************
 * 1. 函数重载
 *
 */
// function getInfo(param: string): string;
// function getInfo(param: number): number;
var getInfo = function (param) {
    return param;
};
// let person: Person = {
//   name: 'name',
// };
// 指定 constructor 的属性
var Memory = /** @class */ (function () {
    function Memory(n, a, s) {
        this.prevZoeo = function (str) { return str.padStart(2, '0'); };
        this.name = n;
        this.age = a;
        this.sex = s;
        this.work = function () {
            return '0';
        };
    }
    return Memory;
}());
var defer = function () { return new Promise(function (resolve) {
    setTimeout(function () {
        resolve(10);
    }, 1000);
}); };
defer().finally(function () {
    console.log();
});
var Static = /** @class */ (function () {
    function Static() {
        this.id = 100;
    }
    Static.getStaticId = function () {
        return this.id;
    };
    Static.getinstanceId = function () {
        return (new this()).id;
    };
    Static.id = "static id";
    return Static;
}());
console.log(Static.getStaticId());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('动物吃什么');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃肉';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃老鼠';
    };
    return Cat;
}(Animal));
var dog = new Dog("狗 ");
var cat = new Cat("猫 ");
console.log(dog.eat());
console.log(cat.eat());
/**
 * * 抽象方法
 * * 抽象方法和抽象类使用 关键字 abstract
 * * 抽象方法不具体实现， 只是一个标准基类
 * * 抽象方法只能在抽象类中使用
 * * 抽象类的子类 必须实现 抽象类的方法
 *
 */
var Abstract = /** @class */ (function () {
    function Abstract(name) {
        this.name = name;
    }
    return Abstract;
}());
var AbsChild = /** @class */ (function (_super) {
    __extends(AbsChild, _super);
    function AbsChild(name) {
        return _super.call(this, name) || this;
    }
    AbsChild.prototype.eat = function () {
        return '111';
    };
    return AbsChild;
}(Abstract));
var abschild = new AbsChild('name');
var md5 = function (key, value) { return key + value; };
var sha1 = function (key, value) { return key + '--' + value; };
var arr11 = [1, 2, 3];
var arr12 = ['1', '2'];
var arr13 = ['1212'];
var arr14 = { 'name': 'name', age: 'age' };
var Pig = /** @class */ (function () {
    function Pig(name) {
        this.name = name;
    }
    Pig.prototype.eat = function () {
        return;
    };
    return Pig;
}());
var pig = new Pig('pig');
pig.eat();
