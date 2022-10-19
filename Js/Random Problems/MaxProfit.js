function maxProfit(priceList){
    let minTillNow = priceList[0];
    let maxProfit = Number.MIN_VALUE;
    for(let sellingPrice = 1; sellingPrice < priceList.length; sellingPrice++){
        minTillNow = Math.min(minTillNow, priceList[sellingPrice]);
        let profit = priceList[sellingPrice] - minTillNow;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;

}
// console.log(maxProfit([7,2,3,5,6,10,1]))
console.log(maxProfit([1,2,9,7,3]))