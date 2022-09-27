function findLeader(arr) {
    let len = arr.length;
    let leadersArry = [];
    leadersArry.push(arr[len - 1]);
    for (let i = (len - 2); i >= 0; i--) {
        if (arr[i] > leadersArry[(leadersArry.length - 1)]) {
            leadersArry.push(arr[i]);
        }
    }
    console.log(leadersArry);
    return leadersArry;
}
findLeader([16, 17, 4, 3, 5, 2]);