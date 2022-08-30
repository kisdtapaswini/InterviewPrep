function binarySearch(arr, elem){
    let min = 0,
    max = arr.length - 1
    let startingIdx;
    let LastIdx;

    while(min<=max){
        let mid = Math.floor((min+max)/2);
        if(elem === arr[mid]){
            startingIdx = mid;
            max = mid - 1;
        }else if(elem > arr[mid]){
            min = mid+1;
        }else {
            max = mid - 1;
        }
    }
    min = 0;
    max = arr.length - 1;
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        if(elem === arr[mid]){
            LastIdx = mid;
            min = mid+1;
        }else if(elem > arr[mid]){
            min = mid+1;
        }else {
            max = mid - 1;
        }
    }
    return {startingIdx, LastIdx};

}
console.log(binarySearch([2,3,3,3,3,4,10,50], 3));
//console.log(binarySearch([2,3,4,10,50], 80));