var sellid=document.getElementById("table");
var sell=table.getElementsByTagName("td");//table内のtd要素
var head=document.getElementById("head");


sellid.addEventListener("click", function(e){
    var eventID=event.target.id;
    console.log(eventID);
    if(eventID==="0-0"||eventID=="0-1"||eventID=="0-2"||eventID=="0-3"||eventID=="0-4"||eventID=="0-5"||eventID=="0-6"||eventID=="1-0"||eventID=="2-0"||eventID=="3-0"||eventID=="4-0"||eventID=="5-0"||eventID=="6-0"||eventID=="7-0"){
 window.alert("選択しなおしてください");


}

else{
   
console.log(e.target);

var sl=e.target;
sl=window.prompt("講義名を入力");
console.log(sl);
e.target.innerHTML=sl;
}});
