function rotateArryWithReverse(arr, n, d){
    if(d===0){
        return arr;
    }
    d = d % n;
    reverseArray(0, n-1, arr);
    reverseArray(0, d-1, arr);
    reverseArray(d, n-1, arr);
    return arr;

}
console.log(rotateArryWithReverse([1,5,6,8,4], 5, 7));
function reverseArray(start, end, arr){
    let i = start,
        j = end;
    while(i < j){
        swap(i, j, arr);
        i++;
        j--;
    }

}
function swap(i, j, arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
