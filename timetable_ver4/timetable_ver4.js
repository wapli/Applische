var a_eventID;
var a=document.getElementsByClassName('a');
var editid=document.getElementById("edit");
const sell=document.getElementsByClassName('sell');
var flag=0;

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
         flag=1;
}, false);
}
}}
for(let i=0;i<a.length;i++){
  a[i].addEventListener('click',function(e){
    
    a_eventID=event.target.id;
    console.log(i);
    console.log(a_eventID);
    SelectPage(i);
  })}

function SelectPage( page) {
  /*
      各ページのエレメントを取得
  */
 
  var elementPage0 = document.getElementById( "page0" );
  var elementPage1 = document.getElementById( "page1" );
  var elementPage2 = document.getElementById( "page2" );
  var elementPage3 = document.getElementById( "page3" );
  var elementPage4 = document.getElementById( "page4" );
  var elementPage5 = document.getElementById( "page5" );
  var elementPage6 = document.getElementById( "page6" );
  var elementPage7 = document.getElementById( "page7" );
  var elementPage8 = document.getElementById( "page8" );
  var elementPage9 = document.getElementById( "page9" );
  var elementPage10 = document.getElementById( "page10" );
  var elementPage11 = document.getElementById( "page11" );
  var elementPage12 = document.getElementById( "page12" );
  var elementPage13 = document.getElementById( "page13" );
  var elementPage14 = document.getElementById( "page14" );
  var elementPage15 = document.getElementById( "page15" );
  var elementPage16 = document.getElementById( "page16" );
  var elementPage17 = document.getElementById( "page17" );
  var elementPage18 = document.getElementById( "page18" );
  var elementPage19= document.getElementById( "page19" );
  var elementPage20 = document.getElementById( "page20" );
  var elementPage21 = document.getElementById( "page21" );
  var elementPage22 = document.getElementById( "page22" );
  var elementPage23 = document.getElementById( "page23" );
  var elementPage24 = document.getElementById( "page24" );
  var elementPage25 = document.getElementById( "page25" );
  var elementPage26 = document.getElementById( "page26" );
  var elementPage27 = document.getElementById( "page27" );
  var elementPage28 = document.getElementById( "page28" );
  var elementPage29 = document.getElementById( "page29" );
  var elementPage30 = document.getElementById( "page30" );
  var elementPage31 = document.getElementById( "page31" );
  var elementPage32 = document.getElementById( "page32" );
  var elementPage33 = document.getElementById( "page33" );
  var elementPage34 = document.getElementById( "page34" );
  var elementPage35 = document.getElementById( "page35" );
  var elementPage36 = document.getElementById( "page36" );
  var elementPage37 = document.getElementById( "page37" );
  var elementPage38 = document.getElementById( "page38" );
  var elementPage39 = document.getElementById( "page39" );
  var elementPage40 = document.getElementById( "page40" );
  var elementPage41 = document.getElementById( "page41" );

  /*各ページを表示*/
  console.log(flag);
  if(flag==0){
  switch( page) {
  case 0:
    elementPage0.style.display = 'block';
      break;
  case 1:
    elementPage1.style.display = 'block';
      break;
  case 2:
    elementPage2.style.display = 'block';
      break;
  case 3:
    elementPage3.style.display = 'block';      
      break;
  case 4:
    elementPage4.style.display = 'block';
    break;
  case 5:
    elementPage5.style.display = 'block';
    break;
  case 6:
    elementPage6.style.display ='block';
    break;
  case 7:
    elementPage7.style.display='block';
    break;
  case 8:
    elementPage8.style.display='block';
    break;
  case 9:
    elementPage9.style.display='block';
    break; 
  case 10:
    elementPage10.style.display='block';
    break;
  case 11:
    elementPage11.style.display = 'block';
    break;
  case 12:
    elementPage12.style.display = 'block';
    break;
  case 13:
    elementPage13.style.display = 'block';      
    break;
  case 14:
    elementPage14.style.display = 'block';
    break;
  case 15:
    elementPage15.style.display = 'block';
    break;
  case 16:
    elementPage6.style.display ='block';
    break;
  case 17:
    elementPage7.style.display='block';
    break;
  case 18:
    elementPage18.style.display='block';
    break;
  case 19:
    elementPage19.style.display='block';
    break; 
  case 20:
    elementPage20.style.display='block';
    break;
  case 21:
    elementPage21.style.display = 'block';
    break;
  case 22:
    elementPage22.style.display = 'block';
    break;
  case 23:
    elementPage23.style.display = 'block';      
    break;
  case 24:
    elementPage24.style.display = 'block';
    break;
  case 25:
    elementPage25.style.display = 'block';
    break;
  case 26:
    elementPage26.style.display ='block';
    break;
  case 27:
    elementPage27.style.display='block';
    break;
  case 28:
    elementPage28.style.display='block';
    break;
  case 29:
    elementPage29.style.display='block';
    break; 
  case 30:
    elementPage30.style.display='block';
    break; 
  case 31:
    elementPag31.style.display = 'block';
    break;
  case 32:
    elementPage32.style.display = 'block';
    break;
  case 33:
    elementPage33.style.display = 'block';      
    break;
  case 34:
    elementPage34.style.display = 'block';
    break;
  case 35:
    elementPage35.style.display = 'block';
    break;
  case 36:
    elementPage36.style.display ='block';
    break;
  case 37:
    elementPage37.style.display='block';
    break;
  case 38:
    elementPage38.style.display='block';
    break;
  case 39:
    elementPage39.style.display='block';
    break; 
  case 40:
    elementPage40.style.display='block';
    break;
  case 41:
    elementPage41.style.display='block';
    break;
  
  default:
    /*各ページを削除 */
    elementPage0.style.display = 'none';
    elementPage1.style.display = 'none';
    elementPage2.style.display = 'none';
    elementPage3.style.display = 'none';
    elementPage4.style.display = 'none';
    elementPage5.style.display = 'none';
    elementPage6.style.display = 'none';
    elementPage7.style.display = 'none';
    elementPage8.style.display = 'none';
    elementPage9.style.display = 'none';
    elementPage10.style.display = 'none';
    elementPage11.style.display = 'none';
    elementPage12.style.display = 'none';
    elementPage13.style.display = 'none';
    elementPage14.style.display = 'none';
    elementPage15.style.display = 'none';
    elementPage16.style.display = 'none';
    elementPage17.style.display = 'none';
    elementPage18.style.display = 'none';
    elementPage19.style.display = 'none';
    elementPage20.style.display = 'none';
    elementPage21.style.display = 'none';
    elementPage22.style.display = 'none';
    elementPage23.style.display = 'none';
    elementPage24.style.display = 'none';
    elementPage25.style.display = 'none';
    elementPage26.style.display = 'none';
    elementPage27.style.display = 'none';
    elementPage28.style.display = 'none';
    elementPage29.style.display = 'none';
    elementPage30.style.display = 'none';
    elementPage31.style.display = 'none';
    elementPage32.style.display = 'none';
    elementPage33.style.display = 'none';
    elementPage34.style.display = 'none';
    elementPage35.style.display = 'none';
    elementPage36.style.display = 'none';
    elementPage37.style.display = 'none';
    elementPage38.style.display = 'none';
    elementPage39.style.display = 'none';
    elementPage40.style.display = 'none';
    elementPage41.style.display = 'none';

      break;
  }
}
}




function changesytle(cssid,cssfile) {
    document.getElementById(cssid).href = cssfile;
 }//色を変えるための関数です

 function change_page(){
   console.log(a[l]);
  a[l].style.color='#ff0000';
 }
