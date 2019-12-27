//ver1.1 onclickの実装をaddEventListenerの実装に変更しました.

document.addEventListener('init', (event) => {
    var page =event.target;
    //マップ機能ページを読み込んだ場合
    if(page.id = "ons-map"){
        console.log("Loaded zoom.js");
        var map = document.getElementById("mapImage");
        map;

        //拡大倍率
        var ratio=1;

        //拡大機能
        document.getElementById("zoomin").addEventListener("click", function(){
            ratio *= 1.1;
            console.log("Increased ratio:"+ratio);

            map.style.width=String(ratio*100)+"vw";
            map.style.height=String(ratio*100)+"vh";

            if(ratio>2.5){
                ratio=2.5;
                map.style.width=String(ratio*100)+"vw";
                map.style.height=String(ratio*100)+"vh";
            }
        }, false);

        //縮小機能
        document.getElementById("zoomout").addEventListener("click", function(){
            ratio *= 0.9;
            console.log("Decreased ratio:"+ratio);

            map.style.width=String(ratio*100)+"vw";
            map.style.height=String(ratio*100)+"vh";

            if(ratio<1){
                ratio=1;
                map.style.width=String(ratio*100)+"vw";
                map.style.height=String(ratio*100)+"vh";
            }
        }, false);
    }
},false);