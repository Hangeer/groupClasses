#### 第一节课

+	我们来讲讲 js
	+	why js
		+	历史背景
		+ 	js 和 es dom bom 的关系
		+  	dom bom 是啥，常用的方法
			+	操作 DOM
			+	navigator 对象
	+	html 中使用 js 
		+	内联 引入
		+ 	标签属性
			+	async 表示在页面加载完这个脚本后，脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）（只对从外部进入脚本有效）（H5）
			+	defer 表示脚本直到文档全部解析、显示之后再执行
				+	如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本
			+	chaeset 指定代码字符集（不常用）
			+	language 此属性已经废弃
			+	src 连接外部文件的地址
			+	type 可选，被看做是 language 属性的替代属性，一般代码补全啥的都会写 type="text/javascript" 其实也没有写的必要，因为是默认值
			+	其实标签属性都不怎么常用的，目前只用到 src
			
		+	js 代码中不能包含闭合的 </script> 标签，原因
		+ 	引入外部 js 的正确食用方法
			+	标签要闭合，不是自闭合的，html 的自闭合标签
			+ 	src 路径 
		+  	同一页面的 js 解析顺序，使用 async 和 defer 异步加载
		+	标签的位置 head 之间、 \</body> 之前，应该放在哪儿？考虑加载的情况
		
		+ 	代码的可维护性，阅读性
		+  命名规范，代码格式 js css

	+	变量命名
		+	js 中允许的命名方式
		+ 	命名规则 大小写
	
	+ 	严格模式是啥，有什么用
		+	开启方式
		+ 	运行时候特点
			+	this 指全局
			+ 	隐式全局
			+  	重名属性 重名函数
			
	+  	语句
	
		+	分号很重要，解析器是怎么添加分号的，坑？
		+ 	条件语句后面的大括号
		+   赋值改变类型
	
	+	变量作用域
		+	声明定义域中的局部变量
		
		+ 	全局变量，浏览器 js 中声明全局变量的方式，特性
			+	三种声明方式 显示 隐式 window对象的属性
			+ 	三种声明的全局变量的区别 保存区域 生命周期 删除
			+  	全局变量太多是坏事
		
		+ 	作用域链
		
		+ 	隐式全局变量，作用域提升
		+  	同一作用域中的变量声明提前
	
	+	减少全局变量的推荐写法：立即执行的匿名函数
	
	+ 	数据类型
		+	ES 原始类型
			+ Undefined
			+ Null
			+ Boolean
			+ Number
			+ String
		
		+ 	js 数据类型
			+ 字符串
			+ 数字
			+ 布尔
			+ 数组
			+ 对象
			+ NUll
			+ Undefined
		
		+  	js 内置对象
			+ Object
			+ Arguments (只存在于函数内)
			+ Array
			+ Boolean (0、NaN、null、空字符串和undefined都将转换成 false )
			+ Date
			+ Error
			+ Function
			+ Math
			+ Number
			+ RegExp
			+ String	
			
	+	操作符
		+	包括算术操作符，位操作符，关系操作符，相等操作符，ES 的不同之处在于操作符在不同类型上都可以使用（字符串，数字，布尔值）。在运用到对象上的时候会调用对象的 valueOf()（讲下 valueOf()） 和 toString() 方法，以便取得可以操作的值
		+	操作符运算时发生的类型转换
		+ 	相等操作符，全等操作符
	+	隐式类型转换
		+	+ - 字符串、数字的转换
		+ 	if while 转 bool 值
		
		+  	for in 循环（讲下 for in），对象标识符转 string，数组的*索引*（另外，不要逗比的用 for in 去循环数的值）
				
				var student = {
					"name": "Driver",
					"age": 20,
					car: "benz"
				}
				for (var key in student) {
					console.log(typeof key);
				}
		+   alert 造成（数组，字符串）
					
					String.prototype.fn = function(){return this};
					var a = 'hello';
					alert(typeof a.fn()); //-->object
					alert(a.fn()); //-->hello
					
			仅作示例，不要轻易扩展原型对象
					
	+	浮点数精度丢失
		+	0.3 - 0.2
		+	IEEE-745 浮点数表示法
	
	+	函数
		+	传参，调用，返回值
		+   return 语句
			+	return 语句所在行之后的代码永远不会执行
			+	可以有多个 return 语句
			
		+	函数的参数
			+	arguments 类数组对象，有长度，可以通过索引访问
			+ 	不是数组， instanceof Array -> false 
			+ 	一个函数可以任意传参不报错，运行结果取决于对参数的使用
			+  	传参比预定的参数多/少，会怎么样
			+   内置对象方法的默认参数
					https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
		+	函数的调用
			+	上下文 context
			+ 	调用模式
				+	直接在 window 下调用
						
						 function func() {
						 	return this;
						 }
						 var func_one = function () {
						 	return this;
						 }
					使用 var 不使用 var 声明的不同
				+	对象的方法调用
						
						var obj = {};
						obj.say = function () {
							return this;
						}	
				+	构造器调用
						
						  function Maker () {
						  		this.say = function () {
						  			return this;
						  		}
						  }
						  var _myMaker = new Maker();
					1.一个新的空对象被创造出来 2.这个对象被传递给这个构造器作为 this 参数,也就是说这个对象是这个构造器函数的上下文 3.如果没有显性的 return 语句,这个新的对象则会被隐式的 return 并成为这个构造器的值（js 面向对象）
				+	call apply 调用，数组 prototype 上的方法和字符串方法
		
		+	没有重载
			+	重载是啥，C++ 里的重载 	
			+ 	js 没有重载
	
	+	粗略讲下闭包
		+	理解：一个闭包是一块域，这个域由函数创建而来，一个闭包内可以访问其域外面的内容
		+ 	特性
		
		+	for 循环 onclick 的坑 来个呆莫
			+	在函数绑定的时候，闭包抓住的变量就已经发生了更改
			+ 	闭包记住的是对变量的引用，而不是闭包创建时刻变量的值
			+  	解决方法
		
		+	立即执行函数
	
	+	基本类型 引用类型
		+	基本类型值：指的是保存在栈内存中的简单数据段
		+ 	引用类型：按引用访问，当查询时，我们需要先从栈中读取内存地址，然后再顺藤摸瓜地找到保存在堆内存中的值
		+  	示例 字符串（基） 对象属性（引）
		
		+  	Instanceof 用于检测引用类型，可以检测到具体的，它是什么类型的实例, 如果变量是给定引用类型的实例，instanceof操作符会返回true;
		
	+ 	包装对象（理解）
		+	属性 方法
		+	读取字符串、数字、布尔值的属性和方法的时候，表现得像对象，instanceof 也是，但是不能给他们定义、改变属性啥的
		+ 	包装对象是一种临时对象，是在实现中的一种细节，和对象还是有区别的
		+  	使用 new 和不使用 new 创建的 字符串 数字等在表现上面的不同
	
	+	一些杂七杂八的东西
		+	bash || git bash
		+ 	不要告诉我 git 还不会用 = = 
		+ 	node.js 是好事 能做啥 回去装一个来玩玩
			+	服务端 javascript
			+ 	V8 引擎
			https://nodejs.org/en/
		+	有时间就讲讲上次的作业

		+	作业 写五个 input 框
	
				