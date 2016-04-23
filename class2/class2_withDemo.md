#### 第二节课

+	先来点切图方面的

+	从选择器讲起
	+	选择器的权重 为什么有时候写的 CSS 代码和想的效果不太一样
		+	有一个最厉害的是 !important 
		+	内联样式 style="" (权重 1000)
		+ 	id 选择器 #element {...} (权重 100)
		+  	class/伪类/属性 .element (权重 10)
		+	类型选择器，伪元素选择器 (权重1)

		+	大概的样子是这样的（important > 内联 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符）
		+ 	权重可以叠加

+	讲讲一部分 CSS 3 吧
	+	CSS3 选择器
	+ 	2D/3D 转换
	+  	动画
	+   apperance 属性 (待确定)

+	一点点选择器方面
	+	element1~element2 (选择前面有 element1 的 element2 元素 (ele1 ele2 是同级的，出现在文档流中的先后顺序，不需要相邻先后))
	
	+ 	element[attribute\^=value] \(选择 attribute 以 value 开头的 element)
	+  	element[attribute\$=value] \(选择 attribute 以 value 结尾的 element)
	+   element[attribute\*=value] \(选择 attribute 包含 value 的 element)
		+	类似的语法 CSS2 也支持很多，匹配方式有点像正则表达式
		
	+	element:nth-child(n) (element 的父元素的第 n 个子元素)
	+ 	element:nth-of-type(n) (选择 element 的父元素的 element 集合中的第 n 个子元素)
	+  	注意：n 计数从 1 开始。不仅可以使用数字，还可以使用 odd even 选择奇偶数。还可以使用比如 n+3 来选择位置大于 3 的 n-4 ...

+	 转换：主要介绍下 CSS3 中的转换（2d）
	+	比较好用，建议浏览器环境如果允许的话尽量就拿 CSS3 来写动画效果，CSS3 的转换，结合动画属性可以在 DOM 的层面做出有趣的效果（当然是对于 DOM ，如果纯动画 -> canvas 以后讲吧）
	+ 	但是注意，使用 CSS3 属性的话，跨浏览器要加前缀， 尤其是转换，动画啥的一定要加，否则在浏览器上面就看不到效果，如何添加前缀？等会我们在电脑上配个东西。（autoprefixer）
	+ 	transform 属性，等会讲到的 2d 转换都是基于这个属性
	+  	translate(x, y) 位移
	+ 	rotate(degree) 旋转 圆心是以这个元素的中心
	+  	scale(x, y) 缩放
	+   skew(xDgree, yDegree) 倾斜变形（高中数学 投影）
	+   matrix() 矩阵变换，如果一个元素同时进行以上的多种变化，用这个
	+  	tips: 使用 CSS3 属性之后，元素在文档流中占的仍然是原来的位置
	+   2d 转换是在 x 轴 y 轴上面进行的转换，3d 在以上转换的基础上增加了 z 轴上面的变换

+	动画效果
	+	写动画也分大概两种 transition 和 animation 
	+ 	transition 是过渡，从一个状态过渡到另一个状态，原生默认过渡的运动方式遵循贝赛尔曲线（慢-快-慢），看起来比较自然，优点是写起来比较方便，来看看一个过渡需要写点啥
		+	属性名 transition
		+ 	transition-property 需要过渡的属性 （必须）
		+  	transition-duration 过渡时间	（必须）
		+   transition-timing-function 规定过渡效果的时间曲线 （选择，默认是 ease）
		+   transition-delay 执行过渡之前的延迟时间 （选择，默认是立即执行）
	+	这几个属性可以分开写，当然建议的写法还是写到一行
		
			transition: width 1s liner 2s; 
			/*
			*	等同于...
			*/
		+	需要注意的一点是写过渡的时候要保证属性前后都是一个比较确定的值
		
	+	动画 animation 
	+ 	transition 可以用来写一点反馈的过渡效果，animation 则是稍微高级一些的装逼技巧
	+  	了解 @keyframes 规则
			
			@keyframes xxx {
				from (propName: xx);
				to (propname: xx);
			}
			element {
				animation: xxx 2s; // 要加时间 默认是 0，也就是没有动画
			}
	+	使用百分比来控制动画执行过程
			
			@keyframes xxx {
				0% (propName: xxxx);
				50% (propName: xxxxx);
				100% (propName: xxxxxx);
			}
	+	参数
		+	animation-name 动画名称 （必须）
		+ 	animation-duration 时间 （必须）
		+  	animation-timing-function 速度曲线（选择，默认 ease）
		+   animation-delay 延迟 （选择，默认 0）
		+   animation-iteration-count 播放次数 （选择，默认 1）
		+   animation-direction 在下一周期是否逆向播放 （选择，默认 normal）
		+   animation-play-state 动画是否正在运行或者暂停 （选择，默认 running）
		+   animation （以上所有属性的简写）

+	介绍下关于写 CSS 的有用的东西
	+	autoprefixer -> 帮助补全前缀
	+ 	less -> 很方便书写样式

+	然后还是讲讲 js 方面的东西

