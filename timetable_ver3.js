var finishid=document.getElementById("finish");
var editid=document.getElementById("edit");
const sell=document.getElementsByClassName('sell');

  
  
function changesytle(cssid,cssfile) {
      document.getElementById(cssid).href = cssfile;
   }
  
  
   editid.addEventListener("click",input_edit);//入力ボタン
  finishid.addEventListener("click",input_enter);//完了ボタン
  
     
  //入力
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
     
    var eventID=event.target.id;
      console.log(eventID);
if(eventID[3]=="p"){   
           sl=window.prompt("教室名を入力");      
           event.target.innerHTML=sl;       
                    }      
       
else{      
       var sl=event.target;
       sl=window.prompt("講義名を入力");   

       if(sl!=""&&sl!=null){      
       console.log(event.target);      
       event.target.innerHTML=sl;
                            }
       
       else{      
           window.alert("入力がキャンセルされました");     
           }      
    }
  
                    }


 function a(num){
   
   
        //6限表示
          if(num==0){
             document.getElementById("6").style.visibility="visible"; 
          
                    }
       
       //6限非表示
          else if(num==1){
              document.getElementById("6").style.visibility="collapse"; 
          }
          //7限表示
          else if(num==2){
              document.getElementById("7").style.visibility="visible"; 
          
          }
          //7限非表示
          else if(num==3){
              document.getElementById("7").style.visibility="collapse"; 
          }
      
          else if(num==4){
        
        document.getElementsByclassname("sat").style.visibility="collapse";

          }
          else{
         document.getElementsclassname("sat").style.visibility="visible";
          }
             }