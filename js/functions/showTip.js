function showTip(numRandom2) {
    var tip = tipsList[numRandom2];
    var paragraph = document.getElementById('paragraph');
    paragraph.textContent = tip;
}