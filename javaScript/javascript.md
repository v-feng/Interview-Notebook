# JavaScript 面试知识点总结
**************
本部分主要是笔者在复习 JavaScript 相关知识和一些相关面试题时所做的笔记
# 目录


        1. 介绍 js 的基本数据类型。
        2. JavaScript 有几种类型的值？你能画一下他们的内存图吗？
        3. 什么是堆？什么是栈？它们之间有什么区别和联系？
        4. 内部属性 [[Class]] 是什么？
        5. 介绍 js 有哪些内置对象？
        6. undefined 与 undeclared 的区别？
        7. null 和 undefined 的区别？
        8. 如何获取安全的 undefined 值？
        9. 说几条写 JavaScript 的基本规范？
        10. JavaScript 原型，原型链？ 有什么特点？
        11. js 获取原型的方法？
        12. 在 js 中不同进制数字的表示方式
        13. js 中整数的安全范围是多少？
        14. typeof NaN 的结果是什么？
        15. isNaN 和 Number.isNaN 函数的区别？
        16. Array 构造函数只有一个参数值时的表现？
        17. 其他值到字符串的转换规则？
        18. 其他值到数字值的转换规则？
        19. 其他值到布尔类型的值的转换规则？
        20. {} 和 [] 的 valueOf 和 toString 的结果是什么？
        21. 什么是假值对象？
        22. ~ 操作符的作用？
        23. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？
        24. 操作符什么时候用于字符串的拼接？
        25. 什么情况下会发生布尔值的隐式强制类型转换？
        26. || 和 && 操作符的返回值？
        27. Symbol 值的强制类型转换？
        28. == 操作符的强制类型转换规则？
        29. 如何将字符串转化为数字，例如 '12.3b'?
        30. 如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』?
        31. 常用正则表达式
        32. 生成随机数的各种方法？
        33. 如何实现数组的随机排序？
        34. javascript 创建对象的几种方式？
        35. JavaScript 继承的几种实现方式？
        36. 寄生式组合继承的实现？
        37. Javascript 的作用域链？
        38. 谈谈 This 对象的理解。
        39. eval 是做什么的？
        40. 什么是 DOM 和 BOM？
        41. 写一个通用的事件侦听器函数。
        42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？
        43. 三种事件模型是什么？
        44. 事件委托是什么？
        45. ["1", "2", "3"].map(parseInt) 答案是多少？
        46. 什么是闭包，为什么要用它？
        47. javascript 代码中的 "use strict"; 是什么意思 ? 使用它区别是什么？
        48. 如何判断一个对象是否属于某个类？
        49. instanceof 的作用？
        50. new 操作符具体干了什么呢？如何实现？
        51. Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
        52. 对于 JSON 的了解？
        53. [].forEach.call($$(""),function(a){a.style.outline="1px solid #" (~~(Math.random()(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？
        54. js 延迟加载的方式有哪些？
        55. Ajax 是什么? 如何创建一个Ajax？
        56. 谈一谈浏览器的缓存机制？
        57. Ajax 解决浏览器缓存问题？
        58. 同步和异步的区别？
        59. 什么是浏览器的同源政策？
        60. 如何解决跨域问题？
        61. 服务器代理转发时，该如何处理 cookie？
        62. 简单谈一下 cookie ？
        63. 模块化开发怎么做？
        64. js 的几种模块规范？
        65. AMD 和 CMD 规范的区别？
        66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。
        67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）
        68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？
        69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?
        70. documen.write 和 innerHTML 的区别？
        71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？
        72. innerHTML 与 outerHTML 的区别？
        73. .call() 和 .apply() 的区别？
        74. JavaScript 类数组对象的定义？
        75. 数组和对象有哪些原生方法，列举一下？
        76. 数组的 fill 方法？
        77. [,,,] 的长度？
        78. JavaScript 中的作用域与变量声明提升？
        79. 如何编写高性能的 Javascript ？
        80. 简单介绍一下 V8 引擎的垃圾回收机制
        81. 哪些操作会造成内存泄漏？
        82. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
        83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）
        84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？
        85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？
        86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？
        87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？
        88. 检测浏览器版本版本有哪些方式？
        89. 什么是 Polyfill ？
        90. 使用 JS 实现获取文件扩展名？
        91. 介绍一下 js 的节流与防抖？
        92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？
        93. escape,encodeURI,encodeURIComponent 有什么区别？
        94. Unicode 和 UTF-8 之间的关系？
        95. js 的事件循环是什么？
        96. js 中的深浅拷贝实现？
        97. 手写 call、apply 及 bind 函数
        98. 函数柯里化的实现
        99. 为什么 0.1 0.2 != 0.3？如何解决这个问题？
        100. 原码、反码和补码的介绍
        101. toPrecision 和 toFixed 和 Math.round 的区别？
        102. 什么是 XSS 攻击？如何防范 XSS 攻击？
        103. 什么是 CSP？
        104. 什么是 CSRF 攻击？如何防范 CSRF 攻击？
        105. 什么是 Samesite Cookie 属性？
        106. 什么是点击劫持？如何防范点击劫持？
        107. SQL 注入攻击？
        108. 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？
        109. vue 双向数据绑定原理？
        110. Object.defineProperty 介绍？
        111. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？
        112. 什么是 Virtual DOM？为什么 Virtual DOM 比原生 DOM 快？
        113. 如何比较两个 DOM 树的差异？
        114. 什么是 requestAnimationFrame ？
        115. 谈谈你对 webpack 的看法
        116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？
        117. 谈一谈你理解的函数式编程？
        118. 异步编程的实现方式？
        119. Js 动画与 CSS 动画区别及相应实现
        120. get 请求传参长度的误区
        121. URL 和 URI 的区别？
        122. get 和 post 请求在缓存方面的区别
        123. 图片的懒加载和预加载
        124. mouseover 和 mouseenter 的区别？
        125. js 拖拽功能的实现
        126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？
        127. let 和 const 的注意点？
        128. 什么是 rest 参数？
        129. 什么是尾调用，使用尾调用有什么好处？
        130. Symbol 类型的注意点？
        131. Set 和 WeakSet 结构？
        132. Map 和 WeakMap 结构？
        133. 什么是 Proxy ？
        134. Reflect 对象创建目的？
        135. require 模块引入的查找方式？
        136. 什么是 Promise 对象，什么是 Promises/A 规范？
        137. 手写一个 Promise
        138. 如何检测浏览器所支持的最小字体大小？
        139. 怎么做 JS 代码 Error 统计？
        140. 单例模式模式是什么？
        141. 策略模式是什么？
        142. 代理模式是什么？
        143. 中介者模式是什么？
        144. 适配器模式是什么？
        145. 观察者模式和发布订阅模式有什么不同？
        146. Vue 的生命周期是什么？
        147. Vue 的各个生命阶段是什么？
        148. Vue 组件间的参数传递方式？
        149. computed 和 watch 的差异？
        150. vue-router 中的导航钩子函数
        151. $route 和 $router 的区别？
        152. vue 常用的修饰符？
        153. vue中 key 值的作用？
        154. computed 和 watch 区别？
        155. keep-alive 组件有什么作用？
        156. vue 中 mixin 和 mixins 区别？
        157. 开发中常用的几种 Content-Type ？
        158. 如何封装一个 javascript 的类型判断函数？
        159. 如何判断一个对象是否为空对象？
        160. 使用闭包实现每隔一秒打印 1,2,3,4
        161. 手写一个 jsonp
        162. 手写一个观察者模式？
        163. EventEmitter 实现
        164. 一道常被人轻视的前端JS面试题
        165. 如何确定页面的可用性时间，什么是 Performance API？
        166. js 中的命名规则
        167. js 语句末尾分号是否可以省略？
        168. Object.assign()
        169. Math.ceil 和 Math.floor
        170. js for 循环注意点
        171. 一个列表，假设有100000个数据，这个该怎么办？
        172. js 中倒计时的纠偏实现？
        173. 进程间通信的方式？
        174. 如何查找一篇英文文章中出现频率最高的单词？







        > 1.js 共有六种数据类型，分别是undefined、null、string、number、boolean、symbol(es6),代表创建后独一无二且不可变的    数据类型，为了解决可      能出现的全局变量冲突的问题。
            typeof  xxx 得到以下值：undefined、String、object、number、boolean function、symbol
            instanceof
        > 2.栈：原始数据类型 （Number String undefined boolean）
            堆：引用类型（对象、数组、函数）
            区别：两种类型储存位置不同。
            原始数据类型直接存储在栈中简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放在栈中。
            引用数据类型存储在堆中，占据空间大、不固定。如果存储在栈中将会影响数据运行性能；引用数据类型在栈中存储了指针，指针指向了堆中该实体的原始地址。当解释器寻找引用值时，会首先检索到其在栈中的地址，获得地址后从堆中获取该实体。

          ```
          js 分为两种数据类型的值，基本数据类型，复杂数据类型
          基本数据类型：undefined、null、string、number、boolean、symbol(es6)；
          复杂数据类型：Object类型，所有其他的如 Array,Function、Date都是Object的子类；

        > 3.堆和栈的概念在于数据结构中和操作系统内存中。
            在数据结构中，栈中数据的存储方式是先进后出,儿堆是一个优先队列，按照优先级来排队的，优先级可以按照大小来规定。
            在操作系统中，内存被分为栈区和堆区
            栈区内有编译器自动分配释放，存放函数的参数值，局部变量值等。其操作方式类似于数据结构中的栈。
            堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。

          6.undefined是在作用域内声明未赋值。是undefined的，相反undeclared 是在作用域内未声明过得变量。是undeclared。
          7.首先null和undefined都是基本数据类型。都只有一个值。null和undefined。
            undefined代表含义是未定义，null代表空对象.通常情况声明为定义会返回undefined，null通常用来赋值给一些可能会返回对象的变量，用来初始化。
          8.void 0 === undefined 
          9.一个函数作用域中的变量声明应该尽量提到函数首部。
            代码中出现地址时间等字符串时需用常量代替
            进行比较时尽量使用‘===’和‘！==’
            不要在内置对象上添加方法
            for循环必须使用大括号
            if语句必须使用大括号
            switch语句必须带有default分支
          10.所有的引用类型（function,Array,Object）都具有对象的特性，自由扩展属性
             所有的引用类型（function,Array,Object）都有一个__proto__的属性。属性值是一个普通的对象。
             所有函数都有一个prototype的属性，属性值也是一个普通对象
             所有引用类型（数组、对象、函数）
             isPrototypeOf() 判断一个对象是否在另一个对象的原型链上
             ```
             function Person(){};
             var student = new Person()
             console.log(Person.prototype.isPrototypeOf(student)) // true
             Object.getPrototypeOf()
             hasOwnProperty() 方法来判断一个属性是存在与实例中，还是存在于原型中