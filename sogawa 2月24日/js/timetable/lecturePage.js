var kougimei= document.querySelector('#kougimei');
var season=localStorage.getItem("season");
console.log(kougimei);
//console.log(localStorage.getItem('lecture-name'+i.toString()));
var num=localStorage.getItem('num');
//赤沢ここから
kougimei.innerText=localStorage.getItem(season+'kyouka'+num.toString());
console.log(localStorage.getItem(season+'kyoushi'+num.toString()));
document.getElementById("teacherName").innerText="教授名："+localStorage.getItem(season+'kyoushi'+num.toString());
document.getElementById("tani").innerText="単位数："+localStorage.getItem(season+'tani'+num.toString());
//赤沢ここまで
    var date=localStorage.getItem(season+'RoomContentmemo'+num.toString());
console.log(date);
var RoomContent=document.getElementById('RoomContent');
console.log(RoomContent);
RoomContent.innerHTML=date;
var roombtn=document.getElementById('saveRoom');
roombtn.addEventListener("click", () => {
        //document.getElementById("a-"+num.toString()+"p").innerText=localStorage.getItem(season+'RoomContentmemo'+num.toString());
        var RoomCon = document.getElementById("RoomContent").value;
        localStorage.setItem(season+'RoomContentmemo'+num.toString() ,RoomCon);
        var RoomContent=document.getElementById("RoomContent");
});