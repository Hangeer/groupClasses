#### 第一节课

+	讲上节课的作业
	+	
	
+	本节课内容： js 基础向加一点常见的坑
	+	why javascript
		+	这门语言是 1995 年诞生的，最初的时候用来帮助处理一些简单的表单验证。当时验证表单是使用传到服务端之后验证再返回结果，非常消耗时间，而且如果有一点没有写好，整个表单都要重新填写，为了解决这个坑，就出现了这个东西。
		+	js 和 es 的关系，es 是 js 的核心，词法类型，操作，对象都来自 es ，在这个基础上在加上 BOM DOM 和其他东西，es 的版本啥的。现在目前学，写的是 es5，不过 es6 已经正式出来了，es7 标准也有了，有兴趣可以去看看语法什么的，但是由于兼容问题，里面的很多词法支持得并不是很好
		+	DOM 文档对象模型，用于 HTML 的编程接口，DOM 将整个页面映射成一个多层节点结构 HTML 的组成部分是某种类型的节点，这些节点又包含了不同类型的数据。
			+	通过 DOM 编程，可以对节点进行操作，新增，删除 etc
		+	BOM 浏览器对象模型，用于操作浏览器的编程接口
			+	可以控制浏览器弹出新窗口，将网址定向到特定的页面，以及 screen ，操作 cookies 啥的
	+	现在的浏览器对以上三个部分都实现了不同程度的支持，比较好的是 chrome ff safari 等，IE 的支持和标准有自己的一些东西，所以有的时候需要写兼容就是这个原因
	+	有兴趣可以了解浏览器内核
	
	+	在 HTML 中使用 javascript
		+	\<script> 元素	
			+	使用 script 元素的方式有两种，内嵌或者引入
			+	标签属性 
				+	async 表示应当立即加载这个脚本（只对从外部进入脚本有效）
				+	chaeset 指定代码字符集（不常用）
				+	defer 表示脚本直到文档全部解析、显示之后再执行
				+	language 此属性已经废弃
				+	src 连接外部文件的地址
				+	type 可选，被看做是 language 属性的替代属性，一般代码补全啥的都会写 type="text/javascript" 其实也没有写的必要，因为是默认值
				+	其实标签属性都不怎么常用的，目前只用到 src
			+	script 标签的使用
				+	在一段 js 语言中不能包含 闭合的 script 标签
						
						<script type="text/javascript">
						    ;(function () {
						        alert("</script>");
						    })();
						</script>
						
					原因其实就是会被误认为标签已经闭合了，然后 gg
					
					如果非要加上怎么办呢 使用转义字符
						
						<script type="text/javascript">
						    ;(function () {
						        alert("\</script>");
						    })();
						</script>
					
				+	关于引入外部 js
					
					正确的食用方法
						
						<script type="text/javascript" src="./path/xxx.js"></script>
					值得注意的是：
						
					+	引入的 js 标签里面就不要写其他代码了，写了是白写的
					+ 	两个标签都要写，不要一不小心写成自闭合标签
						
							<br><br/>
							<br />
							// 两种是可以的
						或许看到过有的标签，比如 <br> 标签，可以成对出现，也可以自闭合（浏览器会帮你补全），但是在 HTML 的写法中，这样是不规范，使用了不一定有效，不使用一定是正确的
					+	js 不仅可以使用本地路径的文件，也可以使用跨域的引入 js，在保证安全的情况下，可以使用 cdn 网站提供的 js 代码在自己的项目中（比较友好，第一是压缩了，另外如果是使用多个，可以通过更改 src 地址的参数帮你和并为一个 js 文件，前提是要联网）
					+ 	同一个页面的 js 解析顺序，按照出现在 HTML 文档中的顺序加载，但注意：使用 async 或者 defer 属性的除外（这两个属性用来确定加载可以在所有之前加载或者是之后）如果方便的话建议还是手动设置位置，确定加载顺序
				+ 	标签出现的位置
						
					按照惯例，所有 script 标签是放在页面的 head 元素中，这样做是为了把所有外部加载的文件放到同一个地方。浏览器渲染页面的时候是按照 HTML 的语序来加载的。这样会造成一些困扰，一是如果我在文档 DOM 元素加载之前就加载了操作 DOM 的 js 的话，根本无法捕捉到 DOM，二是如果网速很慢比如在 2G 网下加载个原生 jQuery，2G 网络平均速度不过十几 K 每秒，jq 8300+ 行，大小 200+Kb，这样就非常尴尬，用户首页就会白屏很久。为了解决上面第二个问题，所以出现了把 script 标签写在 </body> 标签前的写法
					
				+	延迟脚本
				
					使用了 defer 属性	  
						
						<script type="text/javascript" defer="defer" src="./path/xxx.js"></script>
					使用效果：立即下载但延迟执行，作用：等到该加载的东西都有了再进行此脚本的操作，只适用于外部引入的 js 文件
				
				+	异步脚本	
				
					使用了 async 属性
						
						<script type="text/javascript" async src="./path/xxx.js"></script>
					使用效果：与 defer 类似，但是不保证在一个页面中都设置了这个属性的元素加载顺序是按照在 HTML 中出现的位置
				+	注意写代码的可维护性，可阅读性

				+	srcipt 标签小结：
					+	src 设置为相应文件 url 可以使用自己本地的，也可以跨域使用别人服务器上的代码，需要注意的就是安全性
					+ 	script 标签被解析的默认顺序是按照在浏览器中出现的位置加载，head 标签里或 </body> 标签前的区别是在 DOM 加载之前/后
					+  async 属性和 defer 属性 		
	+	基本概念
		+	是弱类型的语言
		+ 	区分大小写
		+  	标识符：用来标识变量，函数名，属性等的参数，规则
			+	标识符的第一个字符是字母，下划线 _ 或者美元符号 $ 三种之中的一种
			+   其它字符可以是包含上面三种，再加上数字
			+   标识符可以使用扩展的 ASCII 码或者 Unicode 中的字符（比如中文）但不推荐这样做
		+	注释
			+	单行 //
			+   多行 /**/ 使用多行时候建议在每行前面加星号，增强可读性
		+	严格模式
			+	开启的方式：在脚本文件的第一行或者函数的第一行使用
				
					function () {
						"use strict";
					}
			+	严格模式中，对于代码的判定标准会更加严格，比如全局变量必须先声明，禁止 this 关键字指向全局对象
					
					function () {
						console.log(this);
						// 这里的 this 指向全局对象，报错
					}
				另外还有对象不能有重名属性，函数不能有重名等，严格模式的存在是为了编码规范，以及为以后 ES 语法的写法做铺垫。
		+	语句
			+	推荐的写法是在每一句结尾加上分号，如果不加分号，则由解析器判断语句结束，建议不省略。
			+ 	if 之类的条件语句，如果下面执行的代码只有一句
					
					if (a === 1) 
						console.log(233);
						
				建议条件判断语句的代码后面都带上大括号
					
					if (a === 1) {
						console.log(233);
					}
			+	关键字和保留字
				+	保留字不能作为变量名或者属性名
			+	变量
				+	ES 的变量是松散型的，使用 var 可以声明所有类型的变量
				+ 	对变量赋值会改变变量的类型
					
						var str = "redrock";
						console.log(typeof str);
						//	"string"
						str = 0;
						console.log(typeof str);
						//	"number"
			+	变量作用域（重点）
				+	var 定义的变量是该定义域中的局部变量
					
						var outOfFunc = 1;
						function func () {
							var outOfFunc = 2;
							console.log(outOfFunc);
							//	2
						}
						console.log(outOfFunc);
						//	1
					先声明再使用，比较清晰
					
						var outOfFunc = 1;
						function func () {
							console.log(outOfFunc);
							//	1
						}
						console.log(outOfFunc);
						//	1
					函数作用域没有，所以会到函数外的作用域去找有没有，有的话就输出，没有的话就继续往上一层寻找，如果全局都没有这个变量的话就返回 undefined
					
						var outOfFunc = 1;
						function func () {
							console.log(outOfFunc);
							//	undefined
							var outOfFunc = 2;
						}
						console.log(outOfFunc);
						//	1		
					函数里面的 outOfFunc 是等于外部的 1 还是 2 还是 undefined
					
					 原因：在某一个作用域下声明的所有变量，js 解析的时候回默认提到作用域首部声明，按顺序执行到赋值的时候再赋值，所以上面的代码相当于
					 
						 	var outOfFunc = 1;
							function func () {
								var outOfFunc;
								console.log(outOfFunc);
								//	undefined
								outOfFunc = 2;
							}
							console.log(outOfFunc);
							//	1	
				+	在函数中定义一个变量，那么这个变量在函数退出后就会销毁
				+ 	关于全局变量
					+	有三种全局变量，一种是在全局作用域中使用 var 声明的，另一种是在局部作用域中，因为没有使用 var 导致变量作用域提升的，最后是使用 window.xxx 作为 window 对象的某一属性
						
							var global = "global";
							function func () {
								careless_global = "global";
							}		
							window.set_global = "global";
					+	如何判断全局变量
						
							var a = "global";
							console.log(a);
							console.log(window.a);
							console.log(window["a"]);
						全局变量可以通过以上几种形式访问，可以看做是 window 对象的一个属性
					+	显式声明和隐式声明的全局变量的异同
						+	访问方式是相同的，在内存中保存的区域是相同的，生命周期也是相同的（整个程序）
						+ 	使用 var 声明的全局变量不能用 delete 方法删除，而后两种是可以的
						+  	尽量少用全局变量，原因：在不同的 js 中声明了相同的全局变量，在加载的过程中后声明的变量回覆盖掉先声明的变量，造成混乱
					+	p.s: 推荐的 js 代码写法
					
							<script type="text/javascript">
							    ;(function () {
							    	// codes here
							    	window.globalVariable = "global";
							    })();
							</script>
							//	没有 jq 的
							
							<script type="text/javascript">
							    $(function () {
							    	//	codes here
							    	window.globalVariable = "global";
							    })();
							</script>
							//	有 jq 且代码立即执行
							
							<script type="text/javascript">
							    $(document).ready(function () {
							    	// codes here
							    	window.globalVariable = "global";
							    });
							</script>
							//	有 jq 且代码在文档加载之后再执行的
							
							
						将整个 js 的代码包裹在一个立即执行的闭包函数中，需要全局变量的时候将它暴露出来即可，闭包函数前后都要加上分号，避免执行的时候变成前一个函数的参数 （Currying）
						
	+	数据类型
		
		+	ES 原始类型	
			+ Undefined
			+ Null
			+ Boolean
			+ Number
			+ String
		
		+	js 数据类型				
			+ 字符串
			+ 数字
			+ 布尔
			+ 数组
			+ 对象
			+ NUll
			+ Undefined
		
		+	js 内置对象
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
		
		+	概念比较多，写代码的时候这些知识可能用不到，作为常识掌握，比如
			+	数字中 Infinity 是个特数量
			+ 	JS 在表示浮点数的时候有精度误差
			+   Date 返回时间, 在计算的时候是通过时间戳来计算
			+   对象方法
			+   任意 js 值都可以转换为布尔值
	+	操作符
		+	包括算术操作符，位操作符，关系操作符，相等操作符，ES 的不同之处在于操作符在不同类型上都可以使用（字符串，数字，布尔值）。在运用到对象上的时候会调用对象的 valueOf() 和 toString() 方法，以便取得可以操作的值
		+ 	一元操作符： 定义：只能操作一个值的操作符
			+	递增/减 
					
					var foo, bar;
					foo = 20;
					bar = 20;
					
					console.log(foo++ + 2);
					//	22
					console.log(foo);
					//	21
					console.log(--bar + 2);
					//	21
					console.log(bar);
					//	19
			不仅值用于数字，还能用于一切 js	能够转成数值计算的值，只需要遵守一定规则
				
			+	应用于包含数字的一串字符串中，先将其转化成数字值，再进行操作
				
					var str = "233";
					console.log(str++);
					//	233
					console.log(str);
					//	234
					console.log(typeof str);
					//	number
			会发生隐式类型转换，适用情况：字符串里面是纯数字，数字前后可以有空格
			+	用于不能有效转化成数字的字符串，返回 NaN
					
					var str = "blablabla233";
					console.log(str++);
					//	NaN
			不能有效转换成数字，使用情况：有字符，字符串是纯数字，但数字中间有空格等情况
			+	在应用布尔值 false 时，现将其转化为 0 再执行 +1 操作
					
					var boo = false;
					console.log(boo++);
					//	0
					console.log(boo);
					//	1 
				也会有隐式转换，会从布尔值转换成数字
 			+	浮点数时，加减 1
 			
 			> **但是 js 在处理浮点数的情况下会有偏差这是语言特性导致的（也叫精度丢失），不可避免** Javascript采用了IEEE-745浮点数表示法（几乎所有的编程语言都采用），这是一种二进制表示法，可以精确地表示分数，比如1/2，1/8，1/1024。遗憾的是，我们常用的分数（特别是在金融的计算方面）都是十进制分数1/10，1/100等。二进制浮点数表示法并不能精确的表示类似0.1这样 的简单的数字，上诉代码的中的x和y的值非常接近最终的正确值，这种计算结果可以胜任大多数的计算任务：这个问题也只有在比较两个值是否相等时才会出现.
 			
 				var a = 0.3-0.2;
				console.log(a);
				//	0.09999999999999998
			+  应用于对象时，先调用对象的 valueOf() 方法取得一个可以供操作的值，然后再对其使用上面的规则，如果是 NaN ，则在调用 toString() 方法后再使用上述规则
			
					var obj = {
						valueOf: function () {
							return -1;
						}
					}
					console.log(obj++);
					//	-1
					console.log(obj);
					//	0
					
					var obj = {
						a = 1;
						//	没有指定 valueOf() 方法的返回值
					}
					console.log(obj++);
					//	NaN
Object.prototype.valueOf() 方法，用来返回指定的原始值

+	一元加减操作符的特性和差不多
+	位操作符 操作二进制 不常用不讲
+ 	布尔操作符
	+	逻辑非 （!）
		+	操作对象，返回 false
		+ 	空字符串 true
		+  	非空字符串 false
		+   0 true
		+   任意非 0 数值（包括 Infinity）false
		+   NaN true
		+   null true
		+   undefined true
	+	逻辑非用来模拟 Boolean 操作符
		!!
	+	逻辑与
		+	如果第一个操作是对象，则返回第二个操作数
		+ 	如果两个参数都是对象，则只有在第一个对象的参数操作结果是 true 时候返回第二个对象
				
				var a = {},
					b = 0,
					c = {};
				console.log(a && b);
				//	0
				console.log(a && c);
				//	返回对象 c	
		+	其中有一个参数为 NaN 或 Undefined 就返回 NaN 或 Undefined
+	== 和 === （重点理解）
	+	相等和全等不是同一个概念
	+ 	相等包含了隐式转换，全等没有
	+   相等和不相等 == != 
		+	使用这两个操作符的时候都会先转换操作数（强制转型），然后再比较他们的相等性
		+ 	强制转型的规则：
			+	如果有一个操作数是布尔值，则再比较之前先转换成数字 0 和 1
			+	一个字符串一个数值，比较之前将字符串转换为数值
			+ 	一个是对象一个不是，则调用对象的 valueOf() 方法
			+   and so on
		+	全等和不全等
			+	全等的前提：值相等，类型相等
+	隐式类型转换
	+	运算中存在，由运算符特性引起
			
			/* + 运算符 */
			var num = 10;
			var str = "20";
			var c = num + str;
			//	string "1020"
			
			/*  运算符 */
			var d = num - str;
			// number -10
		使用 + - 运算符的特性就可以轻易转字符串和数字
	+	语句中存在
			
			/* if 语句 */
			var obj = {};
			if (obj) {
				console.log(1);
			}		
			//	1
		if 里面的语句会被隐式转成 boolean 值，从而进行判断，while 语句同理
		
			/* for in 语句 */
			var student = {
				"name": "Driver",
				"age": 20,
				car: "benz"
			}	
			for (var key in student) {
				console.log(typeof key);
			}
			
			//	都是 string
			
			
			
+	关于操作符和语句更多的看看高级程序设计第三章			
						