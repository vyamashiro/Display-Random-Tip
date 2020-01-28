function showTip(numRandom) {
    var tip = tipsList[numRandom];
    var paragraph = document.getElementById('paragraph');
    paragraph.textContent = tip;
}