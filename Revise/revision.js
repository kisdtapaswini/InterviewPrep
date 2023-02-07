//Example 1: Print Numbers
function countDown(n){
    if(n==0){
      //  console.log(1);
        return;
    }
    console.log(n);

    countDown(n-1);

}
countDown(5);
