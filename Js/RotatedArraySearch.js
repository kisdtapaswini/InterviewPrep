function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length -1;
    if(low > high){
        return -1;
    }
    while(low <= high){
        let mid = Math.floor((high + low)/2);
        if(target === arr[mid]){
            return mid;
        }else if(target > arr[mid] && target < arr[high]){
            low = mid+1;
        }else {
            high = mid-1;
        }
        // if(target === arr[mid]){
        //     return mid;
        // }else if(target > arr[mid] && target < arr[high]){
        //     low = mid + 1;
        // }else if(target > arr[mid] && target > arr[high]){
        //     
        // }else if(target < arr[mid] && target < arr[low]){

        // }
    }
    return 'nt found';
}
//console.log(binarySearch([6, 7, 1, 2, 3, 4, 5], 1));

// function bark(){
//     console.log("calling bark");
// }
// bark.animal = 'dog';
// console.log(bark.animal);
  //  setTimeout(() => console.log(i), 1);

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(member.getFullName());
