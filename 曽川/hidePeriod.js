
 document.addEventListener("init", () => {
  if(event.target.id="ons-timetable.html"){
 var piriod6=localStorage.getItem('piriod6');
 var piriod7=localStorage.getItem('piriod7');
 if(piriod6==0){
  TableDisp(1);
 }
 if(piriod7==0){
  TableDisp(3);
 }

 





  }
 });

// function aaa(num){
   
   
//     //6限表示
//       if(num==0){
//          document.getElementById("period_6").style.visibility="visible";
//          document.getElementById("button_dispPiriod6").style.display="none";
//          document.getElementById("button_hidePiriod6").style.display="inline";
//                 }
   
//    //6限非表示
//       else if(num==1){
//           document.getElementById("period_6").style.visibility="collapse"; 
//           document.getElementById("button_hidePiriod6").style.display="none";
//           document.getElementById("button_dispPiriod6").style.display="inline";
//       }
//       //7限表示
//       else if(num==2){
//           document.getElementById("period_7").style.visibility="visible"; 
//           document.getElementById("button_dispPiriod7").style.display="none";
//           document.getElementById("button_hidePiriod7").style.display="inline";
//       }
//       //7限非表示
//       else if(num==3){
//           document.getElementById("period_7").style.visibility="collapse"; 
//           document.getElementById("button_hidePiriod7").style.display="none";
//           document.getElementById("button_dispPiriod7").style.display="inline";
//       }
//       else {
//           alert("error");
//       }
//          }

         function TableDisp(num){
         
          
            //6限表示
            switch(num){
             case 0:
                 document.getElementById("period_6").style.display="inline";
                 document.getElementById("button_dispPiriod6").style.display="none";
                 document.getElementById("button_hidePiriod6").style.display="inline";
                 localStorage.setItem('piriod6',1);
                    break;    
           
           //6限非表示
              case 1:
                  // document.getElementById("period_6").style.visibility="collapse"; 
                  document.getElementById("period_6").style.display="none"; 
                  document.getElementById("button_hidePiriod6").style.display="none";
                  document.getElementById("button_dispPiriod6").style.display="inline";
                  localStorage.setItem('piriod6',0);
                break;
              //7限表示
             case 2:
                  document.getElementById("period_7").style.display="inline"; 
                  document.getElementById("button_dispPiriod7").style.display="none";
                  document.getElementById("button_hidePiriod7").style.display="inline";
                  localStorage.setItem('piriod7',1);
                    break;
              //7限非表示
             case 3:
              document.getElementById("period_7").style.display="none"; 
              document.getElementById("button_hidePiriod7").style.display="none";
              document.getElementById("button_dispPiriod7").style.display="inline";
              localStorage.setItem('piriod7',0);
                  // document.getElementById("period_7").style.visibility="collapse"; 
                 
                break;
              
            default:
                 
                  break;
            }
        }
       
        