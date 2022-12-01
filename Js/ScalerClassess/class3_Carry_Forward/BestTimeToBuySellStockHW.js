/**
 * Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.
 * @param {*} arr 
 * @returns 
 */
// Brute Force approach
// Time Complexity : O(n^2)
// Space complaxity : O(1)
function sellBuyStock(arr){
    let n = arr.length;
    let buyPrice;
    let sellPrice;
    let maxProfit =0;
    for(let i = 0; i < n; i++){
        buyPrice = arr[i];
        sellPrice = arr[i];

        for(let j = 1; j <= i; j++){
            if(arr[j] < buyPrice){
                buyPrice = arr[j];
            }
        }
        for(let j = i+1; j < n; j++){
            if(arr[j] > sellPrice){
                sellPrice = arr[j];
            }
        }
        maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
    }
    return maxProfit;

}
//console.log(sellBuyStock([1, 4, 5, 2, 4]));
  //  console.log(sellBuyStock([ 100, 180, 260, 310,40, 535, 695 ]));


/**
 * Optimised way
 * 
 */
 function sellBuyStockOpti(prices){
    let len  = prices.length;
    let minBuy = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > minBuy){
            maxProfit = Math.max(maxProfit, prices[i] - minBuy);
        }else{
            minBuy = prices[i];
        }
    }
    return maxProfit;


 }
 // console.log(sellBuyStockOpti([ 100, 180, 260, 310,40, 535, 695 ]));

