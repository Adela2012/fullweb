# SAGA

## Generator知识补充
Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
1. function关键字与函数名之间有⼀个*;
2. 函数体内部使用yield表达式，定义不同的内部状态。
3. yield表达式只能在 Generator 函数里使⽤，在其他地⽅会报错。
4. yield表达式后面的表达式，只有当调用next⽅法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

由于 Generator 函数返回的遍历器对象，只有调⽤next⽅法才会遍历下一个内部状态，所以其实提供了⼀种可以暂停执⾏行的函数。yield表达式就是暂停标志。

总结⼀下，调⽤ Generator 函数，返回⼀个遍历器对象，代表 Generator函数的内部指针。以后，每次调用遍历器对象的next⽅法，就会返回⼀个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后⾯面那个表达式的值；done属性是⼀个布尔值，表示是否遍历结束。


## 实现登录