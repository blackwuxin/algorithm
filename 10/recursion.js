var hasSovledList = [];
var f = function (n){
    if(n==1) return 1;
    if(n==2) return 2;

    if(hasSovledList[n]){
        return hasSovledList[n]
    }
    var ret = f(n-1) + f(n-2);
    hasSovledList[n] = ret;
    console.log(ret);
    return  ret;
}

// console.log('f(1)=' + f(1));
// console.log('f(2)=' + f(2));
// console.log('f(3)=' + f(3));
// console.log('f(4)=' + f(4));

console.log('...');
console.log('f(50)=' + f(50));