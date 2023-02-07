function towerOfHanoi(A){
    let src = 1;
    let dest = 3;
    let temp = 2;
    let ans = new Array();
    toh(A, src, dest, temp, ans);
    return ans;
}
function toh(n, src1, dest1, temp1, mat){
    if(n=== 0){
        return;
    }
    let arr = [];
    toh(n-1, src1, temp1, dest1, mat );
    arr.push(n);
    arr.push(src1);
    arr.push(dest1);
    console.log(arr);
    mat.push(arr);
    toh(n-1, temp1, dest1, src1, mat);
}
towerOfHanoi(1);