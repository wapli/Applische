var editid=document.getElementById("edit");
var sellid=document.getElementById("table");
var head=document.getElementById("head");

editid.addEventListener("click",function(e){

    edit.input();
    
});

var edit={
    input:function(){
        sellid.addEventListener("click", function(e){
    var eventID=event.target.id;
    console.log(eventID);
    if(eventID[3]=="e"){
        var sl=0;
        

    }
    else{
        sl=1;
    }

if(sl==0){
    

}
else{
 if(eventID==="0-0"||eventID=="0-1"||eventID=="0-2"||eventID=="0-3"||eventID=="0-4"||eventID=="0-5"||eventID=="0-6"||eventID=="1-0"||eventID=="2-0"||eventID=="3-0"||eventID=="4-0"||eventID=="5-0"||eventID=="6-0"||eventID=="7-0"){
 window.alert("選択しなおしてください");


}

else if(eventID[3]=="p"){
    console.log(eventID[3]);
    
    var sl=e.target;
    sl=window.prompt("教室名を入力");
    e.target.innerHTML=sl;

}

else{
var sl=e.terget;
sl=window.prompt("講義名を入力");

if(sl!=""&&sl!=null){
   
console.log(e.target);
e.target.innerHTML=sl;
    
}
else{
    window.alert("入力がキャンセルされました");
}
}
}
            }
        );
    }
};


