function countingSort(arr){
    if(arr.length <=1) return arr;

    // 查找数组中数据的范围
    var max = arr[0];
    for(var i = 1; i< arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    var c = [];
    for(var i = 0; i < arr.length; i++){
        c[i] = 0
    }
    
    // 计算每个元素的个数，放入c中
    for(var i = 0; i < arr.length; i++){
        c[arr[i]] ++;
    }
    
    // 依次累加
    for(var i = 1; i <= max; i++){
        c[i] = c[i-1] + c[i];
    }

    var r = [];
    for(var i = arr.length - 1; i >= 0; i--){
        var index = c[arr[i]] - 1;
        r[index] = arr[i];
        c[arr[i]] --;
    }

    return r;
}

var arr = [2,5,3,0,2,3,0,3];
console.log('before sort:',arr);
console.log('after  sort:',countingSort(arr))