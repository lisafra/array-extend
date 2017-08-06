/**
 * Created by Yulia on 2017/8/6.
 */

// 求数组的最小值
Array.prototype.min = function () {
  return calc(this, function (val, min) {
    return !(val > min) ? val : min;
  })
};

// 求数组的最大值
Array.prototype.max = function () {
  return calc(this, function (val, max) {
    return !(max > val) ? val : max;
  })
};

// 求数组元素之和
Array.prototype.sum = function () {
  return calc(this, function (val, sum) {
    if (isNaN(sum)) return val;
    return sum += val;
  })
};

// 求数组平均值
Array.prototype.avg = function () {
  return this.sum() / this.length;
};

// 数组升序排列
Array.prototype.ascend = function () {
  return this.sort(function (x, y) {
    return x - y;
  })
};

// 数组降序排列
Array.prototype.descend = function () {
  return this.sort(function (x, y) {
    return y - x;
  })
};

// 判断数组中是否包含某个特定元素 @param val : 特定元素
Array.prototype.contains = function (val) {
  if (this.length === 0) return false;
  for (var i = 0; i < this.length; i++) {
    if (val === this[i]) return true;
  }
  return false;
};

// 判断两个数组是否相等
Array.prototype.isEqual = function (otherArr) {
  if (!otherArr)  return false;
  if (this.length !== otherArr.length)  return false;
  for (var i = 0, l = this.length; i < l; i++) {
    for (var j = 0; j < otherArr.length; j++){
      if (i === j && this[i] !== otherArr[j]) return false;
    }
  }
  return true;
};

/* 生成不重复的随机数组
*  @param range: 随机数取值范围, 数据类型为数组， 如[ 0, 10]
*  @param length: 生成随机数组的个数
* */
function getRandomArr(range, length) {
  var arr = [];
  var min = parseInt(range[0]);
  var max = parseInt(range[1]);
  length = parseInt(length);
  for (var i = 0; ; i++) {
    var randomNum = parseInt(Math.random()*(max-min) + min);
    if (!arr.contains(randomNum + '')) arr.push(randomNum);
    if (arr.length === length) break;
  }
  return arr;
}

// 数组计算的公用方法
function calc( arr, callback ) {
  var result;
  for (var i = 0; i < arr.length; i++) {
    result = callback(arr[i], result);
  }
  return result;
}
