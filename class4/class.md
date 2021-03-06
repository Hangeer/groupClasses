### 然后...讲一下正则表达式

####	基本概念 BLABLABLA
+	正则表达式
	-	一种字符串的匹配模式，使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些匹配某个模式的文本

+	创建
	+	对象字面量
	+ 	new 一个实例
		- 	检索模式 g（全局） i（区分大小写） m （多行）
+  	词法
	+	元字符（匹配一位）

		| 词法      | 作用         | 
		|-----------|-------------|
		| .        |  	匹配除了换行符之外的任意字符 |
		| \w      	|	匹配字母或数字或下划线或 **汉字**|
		| \s      	|	匹配任意的空白符 |
		| \d      	|	匹配任意的数字 |	
		| \b        |  	匹配单词的开始或结束 |
		| ^         | 	匹配字符串的开始    |
		| $         | 	匹配字符串的结束    |

	+	字符转义
		
		在前面加个转义字符 \ ，有的时候匹配符号(比如说尖括号)其实不需要加转义符号，但是加了也没事儿
	
	+	重复 贪婪匹配
		
		| 词法      | 作用         | 
		|-----------|-------------|
		| *      	| 重复零次或更多次|
		| +        	| 重复一次或更多次 |
		| ?         | 重复零次或一次 |
		| {n}       | 重复 n 次 |
		| {n,}      | 重复 n 次, 不定上限 |
		| {n, m}    | 重复 n-m 次 |

	+	字符类：	只匹配某一范围的字符
	
		[xxx]
	
	+	分支条件
		
		|

	+	分组
		
		(xxx){n}
	
	+	反向引用
		
		(xxx) \1
	
	+	反义
		
		| 词法      | 作用         | 
		|-----------|-------------|
		| \W      	|	匹配任意不是字母或数字或下划线或 **汉字**|
		| \S      	|	匹配任意不是空白符 |
		| \D      	|	匹配任意不是数字 |	
		| \B        |  	匹配不是单词的开始或结束位置 |
		| [\^x]      | 	匹配除了 x 的字符    |
		| [\^xyz]    | 	匹配除了这里面几个字符    |
		
	+	正则运算符的优先级

		| 从高到低      | 运算符         | 
		|-----------|-------------|
		| 最高    	| \ |
		| 高      	| ( )、(?: )、(?= )、[ ] |
		| 中      	| *、+、?、{n}、{n,}、{m,n} |
		| 低        |  ^、$、中介字符 |
		| 最低      | \| |

	
	+	断言...我也没用过	


+	当然啦，词法肯定不止这些，但是上面讲到的基本上都是必须的 

+	貌似早就发过这个链接：http://deerchao.net/tutorials/regex/regex.htm

####	String 上的方法和 RegExp 上的方法
+	RegExp 上的方法
	+	var reg = new RegExp(str_patt, str_methord);
	
		-	第一个参数是表达式，第二个参数是检索模式
	
	+	test
		
		-	reg.test(str);
		- 	传入字符串，对其进行匹配，返回布尔值

	+	exec
	
		-	reg.exec(str);
		- 	检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null
		-  	每执行一次会保存当前位置，可以配合 参数 g 和 while 循环进行全局匹配，匹配成功返回值（成为我们等会写模板字符串的基础）

	+	compile 

		-	编译正则表达式，用于讲一个表达式用新的方法改写，提高了正则表达式的适应性

+	String 上的正则表达式方法
	
	+	var reg = /xxx/g	 
		
		-	字面量创建正则的方式
	
	+	search
		
		-	str.search(reg)
		- 	返回第一个匹配的位置(indexOf 的位置) 默认不是全局 不区分大小写 没找到返回 -1
	
	+	match
	
		-	返回位置（所有出现的位置）
	
	+	replace
	
		-	替换字符串 默认不是全局

	+	split

		- 就是用来分割字符串成数组那个方法啦

+	可以用来做啥
	
	+	可以用来写一些简单的判断（手机号身份证号什么的）
	+ 	用来做解析、写模板引擎

####	我们来一起刷一道关于正则表达式的题吧
			
+	http://www.codewars.com/kata/56baeae7022c16dd7400086e

			function phone(string, num) {
			    var reg = new RegExp(num, "g");
			    var count = 0;
			    var res = {};
			    var returnStr = '';
			
			    do {
			        res = reg.exec(string);
			        count++
			    } while (res !== null)
			
			    switch (count) {
			        case 1:
			            returnStr = "Error => Not found: " + num;
			        break;
			        case 2:
			            returnStr = retStr(string, num);
			        break;
			        default:
			            returnStr = "Error => Too many people: " + num;
			        break;        
			    }
			
			    function retStr (string, num) {
			        var _reg = new RegExp("(\n|\/).*" + num + ".*\n", "g");
			        var _res = string.match(_reg)[0].replace(/\n|\/|.\+|\,|\;|\+|\_|\!|\?/g, " ");
			
			        var _phone = _res.match(/(\d{1,}\-){3}\d{1,}/g)[0];
			        var _name = _res.match(/<.*>/g)[0].replace(/<|>/g, "");
			        var _addr = _res.replace(/((\d{1,}\-){3}\d{1,})|(<.*>)/g, "").replace(/\s{1,}/g, " ").replace(/^(\s+)|(\s+)$/g, "");
			
			        return "Phone => " + _phone + ", Name => " + _name + ", Address => " + _addr;
			    }
			
			    return returnStr;
	}


	/*时间够的话就再讲一个炒鸡简陋正则表达式模板引擎，不够的话就少写点*/