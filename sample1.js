

function a(num){
   
  //6限表示
    if(num==0){
       document.getElementById("6").style.visibility="visible"; 
    
 }

 /*
 深尾賢太郎が天才である証明
 １a=賢太郎 b=アインシュタインとする

 2賢太郎を偏微分すると賢太郎->土屋

 3土屋の髪の毛の本数をx(t)でおくとt->∞の時x->2
 これはアインシュタインにおいても同様である

 ４カネモトショウを積分するとごみ

 ５賢太郎の髪の毛を考えるとt->∞のときx->∞
 これはデッキブラシにおいても同様である

 4より深尾賢太郎は天才である。
 */
 
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
        for(var i=0;i<8;i++){
            document.getElementById(i+"-6").style.visibility="visible"; 
       
          }
    }

    else{ 
   for(var i=0;i<8;i++){
     document.getElementById(i+"-6").style.visibility="collapse"; 

   }
}
}

