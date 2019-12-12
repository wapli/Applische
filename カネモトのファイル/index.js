
function aaa(num){
   
   
    //6限表示
      if(num==0){
         document.getElementById("6hide").style.visibility="visible"; 
      
                }
   
   //6限非表示
      else if(num==1){
          document.getElementById("6hide").style.visibility="collapse"; 
      }
      //7限表示
      else if(num==2){
          document.getElementById("7hide").style.visibility="visible"; 
      
      }
      //7限非表示
      else if(num==3){
          document.getElementById("7hide").style.visibility="collapse"; 
      }
  
      else if(num==4){
        document.querySelector('#2-6').style.visibility="collapse";
   

      }
      else{
     document.getElementById("retu").style.visibility="visible";
      }
         }