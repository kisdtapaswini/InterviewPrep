function findSubArray(arr){
    for(let si = 0; si < arr.length; si++){
        for(let ei = si; ei < arr.legnth; ei++) {
            for(let k = si; k <= ei; k++){
                console.log(arr[k] + "  ");
            }
        }
    }
}
findSubArray([10,20,45,11,15]);