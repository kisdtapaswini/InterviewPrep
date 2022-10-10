function findAllPrimes (A){
    let numberOfPrime = 0;
    if(A===1){
        return 0;
    }
    for(let i=2; i<=A; i++){
        if(checkForPrime(i)) {
            numberOfPrime ++;
        }

    }
    console.log(numberOfPrime);
    return numberOfPrime;
}
function checkForPrime(each) {
    let isPrime = true;
    let factorsCount = 0;

        for(let j = 1; j<=each; j++){
            if(each % j ===0) {
             factorsCount++;
            }
            if(factorsCount > 2){
                isPrime = false
                break;
            }
        }
    return isPrime;
}
findAllPrimes(10);