function clearLocalStorage() {
    
    storeNum = localStorage.getItem('tip').split(';');
        
    if(storeNum.length == tipsList.length) {
        localStorage.clear()
        storeNum = []
    };

};