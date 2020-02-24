// 各種情報を書き換えるためのjs
document.addEventListener("init", function(event){
    var lib_time = document.getElementById("lib_time");
    var date = new Date();
    var dayOfWeek = date.getDay();
    switch(dayOfWeek){
        //日曜
        case 0:
            lib_time.innerHTML = "10:00~17:00";
            break;
        //月曜
        case 1:
            lib_time.innerHTML = "9:00~21:00";
            break;
        //火曜
        case 2:
            lib_time.innerHTML = "9:00~21:00";
            break;
        //水曜
        case 3:
            lib_time.innerHTML = "9:00~21:00";
            break;
        //木曜
        case 4:
            lib_time.innerHTML = "9:00~21:00";
            break;
        //金曜
        case 5:
            lib_time.innerHTML = "9:00~21:00";
            break;
        //土曜
        case 6:
            lib_time.innerHTML = "9:00~17:00";
            break;
    }
}, false);