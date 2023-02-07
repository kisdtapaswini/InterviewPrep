//Q3. Inversion count in an array

function inversionSort(){
  //  let count = 0;
   return mergeSort(arr1, 0, arr1.length - 1);
   // return count;
}


//Q3. Merge sort

function mergeSort(arr, start, end){
    let count_inv = {value : 0};
    let modVal = Math.pow(10,9)+7;

    if(start >= end){
        return;
    }
    let mid = parseInt((start+end)/2);
    count_inv.value = (count_inv.value + mergeSort(arr,start,mid)) % modVal;
    count_inv.value = (count_inv.value +  mergeSort(arr,mid+1,end)) % modVal;
    count_inv.value = (count_inv.value +  merge(arr,start,mid+1,end)) % modVal;

    return count_inv.value % modVal;
}


//let arr1 = [4,8,-1,2,6,9,11,3,4,7,13,0];
let arr1 = [3, 2, 1];
console.log(mergeSort(arr1, 0, arr1.length - 1));
//console.log(arr1);

function merge(arr, s, m, e) {
    let len = (e-s)+1;
    let sortedArr = new Array(len);
    let p1 = s;
    let p2 = m+1;
    k = 0; 
    let modVal = Math.pow(10,9)+7;
    let count = 0;
    while(p1 <= m-1 && p2 <= e){
        if(arr[p1] <= arr[p2]){
            sortedArr[k] = arr[p1];
            p1++;
            k++;
        }else{
            sortedArr[k] = arr[p2];
            p2++;
            k++;
            count = (count + (mid - idx1)) % modVal;
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
   // console.log(sortedArr);
   return count;
}
