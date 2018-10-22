function bubbleSort(list) {
    var length = list.length;
    if (length < 1) return;
    for (var i = 0; i < length; i++) {
        var flag = false;
        for (var j = 0; j < length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                var temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return list;
}

var list = [1, 2, 5, 3, 2, 1, 6];
console.log('before sort:', list);
console.log('after sort:', bubbleSort(list));