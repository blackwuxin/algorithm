//数组中有重复值。查找第一个值等于给定元素
function bsearch1(arr,value){
    var low = 0;
    var high = arr.length - 1;

    while(low<=high){
        var mid = (low+high)/2;
        if(arr[mid] == value){
            if(mid == 0 || arr[mid-1] != value) return mid;
            else high = mid - 1;
        }else if(arr[mid] < value){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return -1;
}

//数组中有重复值。查找最后一个值等于给定元素
function bsearch2(arr,value){
    var low = 0;
    var high = arr.length - 1;

    while(low<=high){
        var mid = (low+high)/2;
        if(arr[mid] == value){
            if(mid == arr.length - 1 || arr[mid + 1] != value) return mid;
            else low = mid + 1;
        }else if(arr[mid] < value){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return -1;
}
//数组中有重复值。查找第一个大于等于给定元素
function bsearch3(arr,value){
    var low = 0;
    var high = arr.length - 1;

    while(low<=high){
        var mid = (low+high)/2;
        if(arr[mid] >= value){
            if( (mid == 0) || (arr[mid - 1] < value)) return mid;
            else high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return -1;
}
//数组中有重复值。查找最后一个小于等于给定元素
function bsearch4(arr,value){
    var low = 0;
    var high = arr.length - 1;

    while(low<=high){
        var mid = (low+high)/2;
        if(arr[mid] <= value){
            if( (mid == arr.length-1) || (arr[mid + 1] > value)) return mid;
            else low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return -1;
}
var arr = [1,2,3,4,4,6,7];
console.log(arr);
console.log('find 4 first index ' + bsearch1(arr,4));
console.log('find 4 last index ' + bsearch2(arr,4));
console.log('find 4 first >= index ' + bsearch3(arr,4));
console.log('find 4 last <= index ' + bsearch4(arr,4));
console.log('find 10 index ' + bsearch2(arr,10));

