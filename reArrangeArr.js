function rearrangeArray(arr, n) {
    //code here
    arr.sort(function(a, b){return a - b});
    console.log(arr.sort(function(a, b){return a - b}));
    let arr1 = [];
    let i =0, j = n-1;
    while(i<j){
        debugger;
        arr1.push(arr[i]);
        arr1.push(arr[j]);
        i++;
        j--;
        if(i ===j){
            arr1.push(arr[i]);

        }
    }
    console.log(arr1);

    for(let i =1; i< n; i++){
        arr[i] = arr1[i];
    }
    
    return arr;
}
rearrangeArray([3, 3, 11, 15, 20, 11, 6, 5, 15, 1, 19], 11);