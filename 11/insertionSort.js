
// 插入排序，a 表示数组，n 表示数组大小
function insertionSort(a) {
    if (a.length <= 1) return;
  
    for (var i = 1; i < a.length; ++i) {
      var  value = a[i];
      var  j = i - 1;
      // 查找插入的位置
      for (; j >= 0; --j) {
        if (a[j] > value) {
          a[j+1] = a[j];  // 数据移动
        } else {
          break;
        }
      }
      a[j+1] = value; // 插入数据
    }
  }
  

var list = [4, 5, 6, 1, 3, 2];
console.log('before sort:', list);
insertionSort(list)
console.log('after sort:', list);