document.addEventListener("init", function(event){
    var page = event.target;

    if(page.id="ons-map"){
        var ua = navigator.userAgent;
        if(ua.indexOf('iPhone') > 0){
            alert("iPhone");
        }
        else if(ua.indexOf('Android') > 0){
            alert("Android");
        }
    }

}, false)