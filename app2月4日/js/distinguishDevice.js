document.addEventListener("init", function(event){
    var page = event.target;

    if(page.id="ons-map"){
        var ua = navigator.userAgent;
        alert(ua);
        if(ua.indexOf('iPhone') > 0){
            alert("iPhone");
        }
        else if(ua.indexOf('Android') > 0){
            alert("Android");
            var map = document.getElementById("mapImage");
            map.style.width = window.innerWidth;
            map.style.height = window.innerHeight;
        }
    }

}, false)
