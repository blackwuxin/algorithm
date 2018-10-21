
var f = function (n){
    if(n==1) return 1;
    if(n==2) return 2;

    var ret = 0;
    var pre = 2;
    var prepre = 1;

    for(var i = 3; i <= n; i++){
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }

    return  ret;
}

console.log('f(1)=' + f(1));
console.log('f(2)=' + f(2));
console.log('f(3)=' + f(3));
console.log('f(4)=' + f(4));

console.log('...');
console.log('f(50)=' + f(50));