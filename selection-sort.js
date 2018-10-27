
Array.prototype.selection_sort = function() {
	var i, j, min;
    var temp;
    var len = this.length;
	for (i = 0; i < len - 1; i++) {
		min = i;
		for (j = i + 1; j < len; j++)
			if (this[min] > this[j])
				min = j;
		temp = this[min];
		this[min] = this[i];
		this[i] = temp;
    }
    return this;
};

var A  = [2,3,4,1,5,10,9];
console.log('befor sort:',A);
console.log('after sort:',A.selection_sort());