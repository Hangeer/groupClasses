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
	+	比较好用，建议浏览器环境如果允许的话尽量就拿 CSS3 来写动画效果（当然是对于 DOM ，纯动画 -> canvas canvas 以后讲吧）
	+ 	但是注意，使用 CSS3 属性的话，跨浏览器要加前缀，如何添加前缀？等会我们在电脑上配个东西。
	+ 	transform 属性，等会讲到的转换都是基于这个属性
	+  	translate(x, y) 位移
	+ 	rotate(degree) 旋转 圆心是以这个元素的中心
	+  	scale(x, y) 缩放
	+   skew(xDgree, yDegree) 倾斜变形
	+   matrix() 矩阵变换，如果一个元素同时进行以上的多种变化，用这个
	+  	tips: 使用 CSS3 属性之后，元素在文档流中占的仍然是原来的位置
	+   2d 转换是在 x 轴 y 轴上面进行的转换，3d 在以上转换的基础上增加了 z 轴上面的变换
	