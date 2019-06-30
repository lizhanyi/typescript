# typescript 学习和探究

## 介绍
    系统的学习 typescript， 并对学习的过程做相应的记录，发到github上，方便以后学习和查阅

## 开发调试
```
    1. 全局安装 typescript: npm i -g typescript
    2. 在项目中 生成 tsconfig.json: tsc --init
    3. 修改 tsconfig.json 文件编译后 文件存放的 位置： outDir
    4. 打开 vscode 终端 运行任务， 选择 监视，修改保存后， 文件将自动编译到指定目录下
```
---
#### 第一部分

+ 数据类型
    + 布尔类型 ( boolean ) 
        ` let bool: boolean = true`
    + 数字类型 ( number )
        ` let num: number = 123`
    + 字符串类型 ( string )
        ` let str: string = '123'`
    + 数组类型 ( array ): 每个元素的数据类型 一致
        ` let arr1: number[] = [ 123 ] `
        ` let arr2: string[] = [ '123' ] `
        ` let arr3: boolean[] = [ true ] `
    + 元组类型 ( tuple ): 元素数据类型多余一种的特殊数组
        ` let arr3: [number,string,boolean] = [123,'123',true] `
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





