// 121. Best Time to Buy and Sell Stock
// Easy

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


var maxProfit = function(prices) {

    let min = prices[0];
    let max = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];

        //When buying set both min and max to the lowest buying price
        if (price < min) {
          min = price;
          max = price;
        }
        //When selling, set max to the highest selling price 
        else if (price > max) {
          max = price;
        }

        if (max - min > profit) {
          profit = max - min;
        }
    }

    return profit;
};



var maxProfit = function(prices) {
    let low = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let price = prices[i]
        
        //Find the lowest price
        low = Math.min(low, price)

        //Check the profit, old profit vs current profit, 
        //when new lowest price is set, current profit is 0, 
        profit = Math.max(profit, price - low)
    }

    return profit;
};