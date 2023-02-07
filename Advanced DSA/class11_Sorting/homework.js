//Q3. Wave Array
function waveArr(A){
    console.log("11");
    for(let i = 1; i < A.length; i+=2){
        if(A[i-1] < A[i]){
            let temp  = A[i-1];
            A[i-1] = A[i];
            A[i] = temp;
        }
    }
    return A;
}

//console.log(waveArr([ 5, 1, 3, 2, 4 ]));
//console.log(waveArr([1, 2, 3, 4]));

//Q1. Maximum & Minimum Magic
function maxMin(A){
    let modVal = 1000000007;
    A.sort((a, b)=> a-b);
    let n = A.length;
    let mid = n/2;
    let ans = new Array(2).fill(0);
    let j = A.length -1;
    for(let i = 0; i < mid; i++){
        ans[0] += Math.abs(A[i] - A[j]);
        ans[0] %= modVal; 
        j--;
    }
    for(let i = 0; i < n-1; i+=2){
        ans[1] += Math.abs(A[i] - A[i+1]);
        ans[1] %= modVal; 
    }
    return ans;
}

function reverseArr(arr, i , j){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
console.log(maxMin([3, 11, -1, 5]));

//Q4. Reverse pairs
//Brute Force

function reversePairs(A){
    let n = A.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            if(A[i] > 2*A[j]){
                count++;
            }
        }
    }

    return count;
}
//console.log(reversePairs([1, 3, 2, 3, 1]));
function mergeSort(arr, start, end, count){
    if(start >= end){
        return;
    }
    let mid = parseInt((start+end)/2);
    mergeSort(arr,start,mid, count);
    mergeSort(arr,mid+1,end, count);
    merge(arr,start, mid, end, count);
}
let arr2 = [3, 2, 1, 3, 1];
let arr1 = [ 14046, 57239, 78362, 99387, 27609, 55100, 65536, 62099, 40820, 33056, 88380, 78549, 57512, 33137, 81212, 32365, 42276, 65368, 52459, 74924, 25355, 76044, 78056, 45190, 94365, 58869, 20611 ];
let count = {"value":0};

//mergeSort(arr1, 0, arr1.length - 1, count)
//console.log(count.value);

function merge(arr, s, m, e, count) {
    let len = (e-s)+1;
    let sortedArr = new Array(len);
    let p1 = s;
    let p2 = m+1;
    k = 0; 
    while(p1 <= m && p2 <= e){
        if(arr[p1] > (2* arr[p2])){
                count.value += m-p1+1; 
                p2++;
        }else{
            p1++;
        }
    }
     p1 = s;
     p2 = m+1;
    while(p1 <= m && p2 <= e){
        if(arr[p1] <= arr[p2]){
            sortedArr[k] = arr[p1];
            p1++;
            k++;
        }else{
            sortedArr[k] = arr[p2];
            p2++;
            k++;
        }
    }
    while(p1 <= m ) {
        sortedArr[k] = arr[p1];
        p1++;
        k++;
    }
    while(p2 <= e ) {
        sortedArr[k] = arr[p2];
        p2++;
        k++;
    }
    k=0;
    for(let z = s; z <= e; z++){
        arr[z] = sortedArr[k];
        k++;
    }
}
