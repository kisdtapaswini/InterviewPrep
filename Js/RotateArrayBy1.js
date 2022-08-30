function rotateArrBy1(arr, n, d){
    let j = 1;
    while(j<=d){
        let first = arr[0];
        for(let i = 1; i < n; i ++){
            arr[i-1] = arr[i];
        }
        arr[n-1]= first;
        j++;
    }


    console.log(arr);
}
rotateArrBy1([1, 3, 4, 2], 4, 3);