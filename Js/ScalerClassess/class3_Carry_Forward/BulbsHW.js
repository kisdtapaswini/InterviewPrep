/**
 * Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

You can press the same switch multiple times.
 */
// Brute Fore Solution

function findNumOfToggle(A){
    if(A.filter(_ => _ == 0).length === 0){
        return 0;
    }
    let count = 0;
    for(let i = 0; i< A.length; i++){
        if(A[i] === 0){
            count++;
            for(let j = i; j < A.length; j++){
                A[j] = A[j] === 1 ? 0 : 1;
            }
        }
    }
    return count;
  //  console.log(arr1);
    
}
//findNumOfToggle([1, 1, 1, 1]);
//findNumOfToggle([0, 1, 0, 1]);


// Optimised Solution

function findNumOfToggleOpti(A){
    if(A.filter(_ => _ == 0).length === 0){
        return 0;
    }
    let count = 0;
    for(let i = 0; i< A.length; i++){
        if((A[i] === 0 && count % 2 == 0) || A[i] === 1 && count % 2 != 0){
            count++;
        }
    }
    return count;
    
}
//console.log(findNumOfToggleOpti([0, 1, 0, 1]));
/**
 * Pick from both sides!
 * @param {*} A 
 * @returns 
 */

function pickFromBothSide(A, B){
    let sum = 0;
    let i = 0
    let j = A.length - 1;
    let count = 0;
    while(count < B){
        if(A[i] > A[j]){
            sum += A[i];
            i++;
        }else{
            sum += A[j];
            j--;
        }
        count++;
    }
    console.log(sum);
    return sum;
    
}

//pickFromBothSide([ -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243, -963, -141, -277, 741, 529, -222, -684, 35 ], 48);
pickFromBothSide([5,-2,3,7,1,2], 4);
