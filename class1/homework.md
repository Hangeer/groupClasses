#### 第一次作业
+	看书 js 高级程序设计 1-4 章（两周时间，不需要看的很细，但是要知道讲了什么）
+ 	看数组，字符串方法（Array/Object .prototype.xxx）
+	前端的同学们要扎实基本功，后台的同学有余力多了解下，可以尝试写一下前两题，有兴趣可以做最后一个。后台同学不硬性要求交作业
+ 	node.js 装好

+	给定一个数字字符串混合的数组，将它们从大到小排序，再无缝拼接成字符串输出
		
		var arr = [123, "445", 2 ,"6", 434];	
		function sortToStr (arr) {
			// your codes
		}
		sortToStr(arr);
		//	"44543412362"
		
		/*
		*	这里是注释
		*	按照数字排序的顺序是 445 434 123 6 2
		* 	把它们拼成字符串
		*/
	
+	给定一个数学方法，一个数字，一个纯数字数组，返回数组，使数组中的每个元素都经过方法操作
	
		var arr = [13, 4, 25, 6, 123];
		var method = "plus";
		var num = 3;
		
		function arrChange (method, num, arr) {
			// your codes;
		}
		
		arrChange (method, num, arr);
		//	[16, 7, 28, 9, 126]
	+	需要实现的数学方法：plus minus multiply divide

+	**WANTED** 做出来我请喝奶茶（前3个） 
	+	我们知道很多单词的副词形式是直接在单词后面加一个 "ly" 比如:
		+	love -> lovely
	+	但是有些单词以 y 结尾的，我们要把 y 变成 i 再加 "ly"
	+ 	根据以上两条简单的语法规则，我们可以写一个将单词变成副词形式的程序
	+  	那么问题来了，我们来写一个函数，输入是这样的：
		
			function translate () {
				// definition;
			}
			//	上面是定义，下面是效果
			
			translate("happy");
			//	["happily"]
			
			translate("happy", "vivid");
			//	["happily", "vividly"]
			
			translate("love", "happy", "vivid", "tight", "easy");
			//	["lovely", "happily", "vividly", "tightly", "easily"];
			
			translate();
			//	"input your words fitst"
	
	+	要求：函数定义的时候默认形参
	+ 	单词默认只在这五个里面测试（想不出其他规则一样的词来了 = = ）
	+  	输入的时候直接写单词或者用变量存起来再执行都可以
	+   输出必须是数组，顺序不能乱
	+   调用这个函数没有传参的时候返回一句提示的语句
####	下次上课大概下下周吧
	+	不过下周还是会讲一点东西。下个周六晚上线上（群视频或者斗鱼直播）评讲作业（用不了多久），顺便扯点杂七杂八的东西
	+ 	有问题可以问任何一位车神