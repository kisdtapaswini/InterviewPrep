function binarySearch(arr, x){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        mid = (min+max)/2;
        if(mid == x){
            return mid;
        }
        if(mid < x){
            min = mid+1;
        }
        if(mid > x){
            max = mid-1;
        }
    }
}
console.log(binarySearch([2,3,4,10,50], 10));