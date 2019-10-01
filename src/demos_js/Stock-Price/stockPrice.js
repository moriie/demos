// Vanilla JS only

function Stockprices() {
    let prices = [7,3,5,3,6,4,9,22,1,28]
    let lowest = prices[0]
    let maxProf = 0;

    for (let n = 0; n < prices.length; n++){
        if (lowest > prices[n]){
            lowest = prices[n]
        }
        else if (maxProf < prices[n] - lowest){
            maxProf = prices[n] - lowest
        }
    }
    return maxProf
}

console.log(Stockprices())