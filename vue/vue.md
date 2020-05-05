# 1.mvvm原理
* model viewmodel view 
* model 数据模型 Model中定义数据修改和操作的业务逻辑。



# 响应式数据原理

* 数据劫持 发布订阅
* 1.核心点 object.defineProperty
    默认 vue 初始化数据，会给data 中的属性使用object.defineProperty重新定义所有属性，当获取

    