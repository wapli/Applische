var finishid=document.getElementById("finish");
var editid=document.getElementById("edit");
const sell=document.getElementsByClassName('sell');
  var sella;

function changesytle(cssid,cssfile) {
    document.getElementById(cssid).href = cssfile;
 }


 editid.addEventListener("click",input_edit);
finishid.addEventListener("click",input_enter);

   

function input_edit(){
           
    for(let i = 0; i < sell.length; i++){
         edit(sell[i]);
     }
    }

    function input_enter(){
        
 for(let i = 0; i < sell.length; i++){
      
    enter(sell[i]);
  }
 }
 

function enter(sella){
    sella.removeEventListener("click",bbb);
}


 function edit(sella){

         sella.addEventListener('click', bbb);

}


 var bbb=function (){
     
    console.log(sella);

    var eventID=event.target.id;
    console.log(eventID);
      if(eventID[3]=="p"){
     
         console.log(eventID[3]);
     
         
     
         var sl=this.target;
     
         sl=window.prompt("教室名を入力");
     
         this.target.innerHTML=sl;
     
     
     
     }
     
     
     
     else{
     
     var sl=this.terget;
     
     sl=window.prompt("講義名を入力");
     
     
     
     if(sl!=""&&sl!=null){
     
        
     
     console.log(this.target);
     
     this.target.innerHTML=sl;
     
         
     
     }
     
     else{
     
         window.alert("入力がキャンセルされました");
     
     }
     
     }

 }
 
 function a(num){
     if(num==0){
        
        document.getElementById("retu").style.visibility="collapse";

     }else{
         document.getElementById("retu").style.visibility="visible";
     }
 }