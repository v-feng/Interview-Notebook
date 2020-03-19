#题目
1.js 中使用typeof能得到几种类型？  js变量类型
2.何时使用 === 何时使用 == ？      强制类型转换
3.window.onload和DOMContentLoaded的区别？ 浏览器的渲染的过程
4.用JS创建10个<a>标签，点击的时候弹出对应的序号？ 作用域
5.简述如何实现一个模块加载器，实现类似require.js的基本功能？ JS模块化
6.实现数组随机排序？（简介、代码精简、效率高）  JS基础算法
7.JS 有哪些内置函数？
    > Object 
      Array
      Number
      String
      Function
      Date
      RegExp
      Error
    >
8.JS变量按照存储方式区分为哪些类型，并描述其特点
9.如何理解JSON
    JSON只不过是一个 JS 对象而已
    JSON.stringify({a:10,b:20}) 把对象变成字符串
    JSON.parse('{"a":10,"b":20}')把字符串变成对象
==========================================================
==========================================================
==========================================================

# 原型和原型链
* 题目
* 知识点
* 解答

# 题目 
- 如何准确判断一个变量是数组类型
    Array.isArray()
    instanceof
- 写一个原型链的例子
- 描述new一个对象的过场
- zepto  源码中如何使用原型链


// 知识点
* 构造函数
* 构造函数 - 扩展
* 圆形规则和示例
* 原型链









### //构造函数
function Foo(name,age){
    this.name = name;
    this.age  = age;
    this.class = 'class-1';
    return this;
}

var f = new Foo('maweifeng',20)   f.__proto__ = Foo.prototype
var f1 = new Foo('够',13)
var f2= new Foo('岁',87)
var f3 = new Foo('刘',90)

// 构造函数-扩展
var a = {}   var a = new Object()
var a = []   var a = new Array()
funtion Foo(){}     var Foo = new Function()

```
function Foo(name){
    this.name = name
}
Foo.prototype.alert = function(){
    alert(this.name)
}
    const f = new Foo('maweifeng')
    f.printName = function(){
        console.log(this.name)
    }
```

### // 原型规则和示例
* 所有的引用类型都具有对象的特性，可以自由扩展属性。（除了null意外）。
* 所有的引用类型都具有一个__proto__属性，属性值是一个普通对象。__proto__阴式类型。
* 所有的函数都有一个prototype属性，属性值是一个对象。prototype是显示类型。
* 所有的引用类型，__proto__值都指向他的构造函数的prototype属性值。
* 如果你试图去找一个对象的某个属性时，如果该对象本身没有这个这属性，那么就会去它的__proto__（也就是它的构造函数的prototype）中寻   找。

// 原型链

function Person(){
    this.name = function(){
        console.log('maweifeng')
    }
}

function Student(){
    this.study = function(){
        console.log('english wenzhang')
    }
}

Student.prototype = new Person()

var xiaoming = new Student()

xiaoming.study()
var item;
for (item in xiaoming){
    if(xiaoming.hasOwnProperty(item)){
        console.log(item)
    }
}

// 描述 new 一个对象的过程

    - 创建一个对象
    - this 指向这个新对象
    - 执行代码
    - 返回 this
==========================================================
==========================================================
==========================================================
==========================================================
==========================================================




# 思考
* 拿到一个面试题，你第一时间看到的是什么？ 考点
* 你如何看待网上永远看不完的面试题？-- >   以不变应万变
* 如何对待接下来遇到的面试题？-- >        题目到知识再到题目
* 如何搞定所有面试题？              js知识是不会变的




                                     # 变量类型和计算                                                            



* 题目
* 知识点
* 解答

变量类型：   * 值类型 vs 引用类型 
变量计算：   * typeof详解



* 类型转换
 1.字符串拼接
 2.==
 3.if语句
 4.逻辑运算符







// 原型继承示例


   封装DOM查询

   function Elem (id){
       this.elem = document.getElementById(id)
   }

    Elem.prototype.html = function(value){
        var elem = this.elem
        if(value){
            elem.innerHTML = value
            return this
        }else{
            return elem.innerHTML
        }
    }
    Elem.prototype.on = function(value,fn){
        var elem = this.elem;
        elem.addEventListener(type,fn)
    }
    var div1 = new Elem('div1')
    console.log(div1)

    div1.html('<p>dsdasdasd</p>')
    div1.on('click',function(){
        alert('maweifeng')
    })






==========================================================
==========================================================
==========================================================
==========================================================




// 作用域与闭包


- 说一下变量提升
- 说明this 几种不同的使用场景
- 创建是个<a>标签，点击时弹出对应的序号
- 如何理解作用域
- 实际开发中闭包的应用