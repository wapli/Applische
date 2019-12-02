document.addEventListener("init", (event) => {
 
  if(event.target.id="appsche"){
     a=document.getElementsByClassName('a');

     lecturePage=document.querySelectorAll('[id^=lecturePage]');

    lecture=document.getElementById("lecture");

 

console.log(a[0]);
a[0].addEventListener("click", () => {
  lecture.pushPage('lecturePage0');
});
      var content0=localStorage.getItem("content0");
      // memoContent0Js=document.memoForm0.memoContent0.value;
      // document.memoForm0.memoContent0=memo0;
      var memo0=document.getElementById("memo0");
      memo0.innerHTML=content0;
      console.log("メモの中身："+content0);

  a[1].addEventListener("click", () => {
    lecture.pushPage('lecturePage1');
});
a[2].addEventListener("click", () => {
  lecture.pushPage('lecturePage2');
});
a[3].addEventListener("click", () => {
  lecture.pushPage('lecturePage3');
});
a[4].addEventListener("click", () => {
  lecture.pushPage('lecturePage4');
});
a[5].addEventListener("click", () => {
  lecture.pushPage('lecturePage5');
});
a[6].addEventListener("click", () => {
  lecture.pushPage('lecturePage6');
});
a[7].addEventListener("click", () => {
  lecture.pushPage('lecturePage7');
});
a[8].addEventListener("click", () => {
  lecture.pushPage('lecturePage8');
});
a[9].addEventListener("click", () => {
  lecture.pushPage('lecturePage9');
});
a[10].addEventListener("click", () => {
  lecture.pushPage('lecturePage10');
});
a[11].addEventListener("click", () => {
  lecture.pushPage('lecturePage11');
});
a[12].addEventListener("click", () => {
  lecture.pushPage('lecturePage12');
});
a[13].addEventListener("click", () => {
  lecture.pushPage('lecturePage13');
});
a[14].addEventListener("click", () => {
  lecture.pushPage('lecturePage14');
});
a[15].addEventListener("click", () => {
  lecture.pushPage('lecturePage15');
});
a[16].addEventListener("click", () => {
  lecture.pushPage('lecturePage16');
});
a[17].addEventListener("click", () => {
  lecture.pushPage('lecturePage17');
});
a[18].addEventListener("click", () => {
  lecture.pushPage('lecturePage18');
});
a[19].addEventListener("click", () => {
  lecture.pushPage('lecturePage19');
});
a[20].addEventListener("click", () => {
  lecture.pushPage('lecturePage20');
});
a[21].addEventListener("click", () => {
  lecture.pushPage('lecturePage21');
});
a[22].addEventListener("click", () => {
  lecture.pushPage('lecturePage22');
});
a[23].addEventListener("click", () => {
  lecture.pushPage('lecturePage23');
});
a[24].addEventListener("click", () => {
  lecture.pushPage('lecturePage24');
});
a[25].addEventListener("click", () => {
  lecture.pushPage('lecturePage25');
});
a[26].addEventListener("click", () => {
  lecture.pushPage('lecturePage26');
});
a[27].addEventListener("click", () => {
  lecture.pushPage('lecturePage27');
});
a[28].addEventListener("click", () => {
  lecture.pushPage('lecturePage28');
});
a[29].addEventListener("click", () => {
  lecture.pushPage('lecturePage29');
});
a[30].addEventListener("click", () => {
  lecture.pushPage('lecturePage30');
});
a[31].addEventListener("click", () => {
  lecture.pushPage('lecturePage31');
});
a[32].addEventListener("click", () => {
  lecture.pushPage('lecturePage32');
});
a[33].addEventListener("click", () => {
  lecture.pushPage('lecturePage33');
});
a[34].addEventListener("click", () => {
  lecture.pushPage('lecturePage34');
});
a[35].addEventListener("click", () => {
  lecture.pushPage('lecturePage35');
});
a[36].addEventListener("click", () => {
  lecture.pushPage('lecturePage36');
});

a[37].addEventListener("click", () => {
  lecture.pushPage('lecturePage37');
});
a[38].addEventListener("click", () => {
  lecture.pushPage('lecturePage38');
});
a[39].addEventListener("click", () => {
  lecture.pushPage('lecturePage49');
});
a[40].addEventListener("click", () => {
  lecture.pushPage('lecturePage40');
});
a[41].addEventListener("click", () => {
  lecture.pushPage('lecturePage41');
});


    
}

});


 

   //メモの保存
 document.forms.memoForm0;
 document.forms.memoContent0;

 
 
// var memoContent0Js= document.memoForm0.memoContent0.value;



function saveStorage(){
  console.log("メモ０を保存します");
   memoContent0Js=document.memoForm0.memoContent0.value;
    localStorage.setItem('content0',memoContent0Js);
    console.log(memoContent0Js);
    memo0.innerHTML=memoContent0Js;
    // document.write('<textarea></textarea>');
}


 




     





 



 
