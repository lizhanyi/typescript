# typescript 学习和探究

## 介绍
    系统的学习 typescript， 并对学习的过程做相应的记录，发到github上，方便以后学习和查阅

## 开发调试
```
    1. 全局安装 typescript: npm i -g typescript
    2. 在项目中 生成 tsconfig.json: tsc --init
    3. 修改 tsconfig.json 文件编译后 文件存放的 位置： outDir
    4. 打开 vscode 终端 运行任务， 选择 监视，修改保存后， 文件将自动编译到指定目录下
    5. 支持 es 高级语法需要配置 tsconfig.json lib 
```
---
#### 第一部分

+ 数据类型
    + 布尔类型 ( boolean ) 
        ``` 
            let bool: boolean = true
        ```
    + 数字类型 ( number )
        ``` 
            let num: number = 123
        ```
    + 字符串类型 ( string )
        ``` 
            let str: string = '123'
        ```
    + 数组类型 ( array ): 每个元素的数据类型 一致
        ``` 
            let arr1: number[] = [ 123 ] 
            let arr2: string[] = [ '123' ] 
            let arr3: boolean[] = [ true ] 
        ```
    + 元组类型 ( tuple ): 元素数据类型多余一种的特殊数组
        ``` 
            let arr3: [number,string,boolean] = [123,'123',true] 
        ```
    + 枚举类型 ( enum ): 变相的数组，可以自定义下标( 为正数 )，下标默认递增 +1，可以指定相同的下标
        ```
            enum Colors { blue, green=3, black }
            enum Colors { blue, green=3, black=1 }
            enum Colors { blue, green=3, black=3 }
        ```
    + 任意类型 ( any )
    + null 和 undefined 
    + void 类型
    + never 类型


#### 第三部分
+ public: 公有( 默认 ), 当前类、子类、类外部均可以访问 
+ private: 私有, 当前类可以访问，子类和外部均无法访问 
+ protected: 保护类型, 当前类、子类可以访问，类外部不能访问
+ static: 静态方法
    ```
    class Static {
        id: number = 100;
        static id: string = "static id";
        static getStaticId: string {
            return this.id; // 为 静态 id
        }
        static getInstanceId(): number {
            return (new this()).id; // 实例 id
        }
    }
+ polymorphism(多态)：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的实现。
    ```
        class Animal{
            name: string;
            constructor( name ){
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
        dog.eat();
        cat.eat();
    ```
+ abstract 抽象方法 ： 
    + typescript中的抽象类，它是提供其他类继承的基类，不能被直接实例化。
    + 抽象方法不具体实现， 只是一个标准基类
    + 抽象方法只能在抽象类中使用
    + 抽象类的子类( 派生类 ) 必须实现 抽象类的方法
    ```
    abstract class Abstract {
	    public name: string;
        constructor(name: string ){
            this.name = name;
        }
        abstract eat(): any; // 抽象方法
        work(): void{ // 普通方法
            console.log('working...');
        }
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
    ```

