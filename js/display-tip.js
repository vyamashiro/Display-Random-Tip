var storeNum = [];

var btn = document.querySelector('.btntip');

btn.addEventListener('click', function() {

    var numRandom2 = checkNum();

    showTip(numRandom2);

    saveLocalStorage(numRandom2);

    clearLocalStorage();

});