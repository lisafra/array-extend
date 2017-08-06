# array-extend
## 使用说明
### 第一步， 下载源码到本地
git clone  https://github.com/lisafra/array-extend.git
### 第二步，引入文件
<script src="array-extend.js"></script>  或者  import '/路径/array-extend.js'(es6语法需要编译)

## API
### 求数组最小值
[1, 23, 4, 5].min()

### 求数组最大值
[1, 23, 4, 5].max()

### 求数组平均值
#### [1, 23, 4, 5].avg()

### 求数组各元素之和
[1, 23, 4, 5].sum()

### 数组元素升序排列
[1, 23, 4, 5].ascend()

### 数组元素降序排列
[1, 23, 4, 5].descend()

### 判断元素中是否包含指定元素
[1, 23, 4, 5].contains(5)

### 判断两个数组中元素是否一样
 [1, 23, 4, 5].isEqual([1,2,3])

### 生成一组在指定区间范围且指定长度的随机不重复数据
getRandomArr([min, max], len)


具体使用方法，请查看demo.html

