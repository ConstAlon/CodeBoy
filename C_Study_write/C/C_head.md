### 学习C语言中，各个头文件以及其中的函数。

#### C库
1. <assert.h>

> 其中提供了一个名为assert的宏，可以用于验证程序做出的假设，并在假设为假时输出诊断消息。
>- - -
>它里面有一个唯一的函数： void assert(int expression)
> 这实际上是一个宏，而不是一个函数，可用于在C程序中添加诊断。

下列就是代码：
```C
#include <stdio.h>
#include <assert.h>

int main(int argc, char const *argv[])
{
	/* code */

	int i;
	char str[50];

	printf("请输入一个整数值：\n");
	scanf("%d",&i);
	assert(i >= 10);
	printf("输入的整数是： %d\n",i);

	printf("请输入字符串：\n");
	scanf("%s",str);
	assert(str != NULL);
	printf("输入的字符串是：%s\n",str);


	return 0;
}
```
运行结果如下图：
1.	正确实例
![[assert1 1.png]]
2. 非法实例
![[assert2 1.png]]

> <font color=#2faa00ff>注意：在正确实例中，输入字符串没有完整打印出来，是因为scanf函数会将空格之后的字符丢弃，换句话说，它遇到空格时，自认为你已经输入完成。</font>