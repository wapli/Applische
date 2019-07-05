
var editid=document.getElementById("edit");
const sell=document.getElementsByClassName('sell');


function changesytle(cssid,cssfile) {
    document.getElementById(cssid).href = cssfile;
 }//色を変えるための関数です

editid.addEventListener("click",function(e){

    edit.input();
    
});



  
    //クリックイベントでアラートを表示する
    var edit={
        
        input:function(){
     for(let i = 0; i < sell.length; i++){
    sell[i].addEventListener('click', function(e) {//クラスでボタンを判断

          console.log(i);

          var eventID=event.target.id;
          console.log(eventID);
            if(eventID[3]=="p"){
           
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
  }, false);
    
  }
}}
  