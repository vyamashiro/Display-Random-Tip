function checkNum() {
    do {

        var numRandom = randomGenerator(0, (tipsList.length-1));
        
    } while (storeNum.indexOf(String(numRandom)) != -1);
    
    return numRandom;
};