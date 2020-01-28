function saveLocalStorage(numRandom2) {

    if(localStorage.length === 0) {
        localStorage.setItem('tip', numRandom2);
    } else {
        var tipRestore = localStorage.getItem('tip');
        localStorage.setItem('tip', tipRestore + ';' + numRandom2);
    };

}