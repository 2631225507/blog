##  **Vue2.x和Vue3.x区别**

1. 源码通过monorepo的形式管理代码

   - Mono:单个
   - Repo：repository仓库
   - 将许多项目的代码存储在同一个repository中。多个包本身相互独立，同时又在同一个仓库方便管理
   - 模块划分的更加清晰，可维护性、可扩展性更强 

2. 源码使用Ts重写

   - Vue2.x:使用Flow来进行类型检测
   - Vue3.x:使用TypeScript来进行重构

3. 使用Proxy进行数据劫持

   - Vue2:使用Object.defineProperty来劫持数据的getter和setter方法的,存在一个缺陷就是当给对象添加或者删除属性时，是无法劫持和监听的,所以不得不提供一些特殊的API，比如$set或$delete，事实上都是一些hack方法。
   - Vue3.x：使用Proxy来实现数据的劫持

4. 删除了一些不必要的API

   - 移除了实例上的$on, $off 和 $once
   - 移除了一些特性：如filter、内联模板等

5. 编译方面的优化

   - 生成Block Tree、Slot编译优化、diff算法优化

   