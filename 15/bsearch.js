//二分查找法循环实现
// function bsearch(arr,value){
//     var low = 0;
//     var high = arr.length - 1;

//     while(low<=high){
//         var mid = (low+high)/2;
//         if(arr[mid] == value){
//             return low;
//         }else if(arr[mid] < value){
//             low = mid + 1;
//         }else {
//             high = mid - 1;
//         }
//     }
//     return -1;
// }
function bsearch(arr,value){
    return bsearchInternally(arr,0,arr.length-1,value);
}
//二分查找法递归实现
function bsearchInternally(arr,low,high,value){
    if(low > high) return -1;
    var mid = (low+high)/2;
    if(arr[mid] == value){
        return low;
    }else if(arr[mid] < value){
        return bsearchInternally(arr,mid+1,high,value);
    }else {
        return bsearchInternally(arr,low,mid-1,value);
    }
}

var arr = [1,2,3,4,5,6,7];
console.log(arr);
console.log('find 3 index ' + bsearch(arr,3));
console.log('find 10 index ' + bsearch(arr,10));

