document.addEventListener("init", (event) => {
  var pageNum;
  if(event.target.id="ons-timetable.html"){

  // 詳細ページを開く
  a=document.getElementsByClassName('a');

  lecturePage=document.querySelectorAll('[id^=lecturePage]');
  var lecturePageListItem=document.getElementsByClassName('lecturePageListItem');
  lecture=document.getElementById("1_lecture")
  for(let i=0;i<a.length;i++){
    a[i].addEventListener("click", () => {
      console.log(i);
      lecture.pushPage('lecturePage'+i.toString());
      localStorage.setItem('num',i);
  });
}
//詳細の表示
for(let j=0;j<lecturePageListItem.length;j++){
  lecturePageListItem[j].addEventListener("click", () => {
    console.log(j);
    var pageNum=localStorage.getItem('num'.toString());
    console.log(pageNum);
  
    switch (j){
      case 0://出欠

        break;
    case 1://メモ
        lecture.pushPage('memo'+pageNum.toString());
       
        break;
    case 2://シラバス
        lecture.pushPage('syllabus'+pageNum.toString());
        break;
    case 3://e-class

        break;
    case 4://評価基準
    lecture.pushPage('EvaluationCriteria'+pageNum.toString());
        break;
    case 5://休講情報
      break;
    case 6://科目登録

        break;
    default:
          alert("エラー");
       break;
    }

  });
}
}


});

var content=localStorage.getItem("content"+pageNum.toString());
var memo=document.getElementById("memo"+pageNum.toString());
memo.innerHTML=content;

function saveStorage(){
  console.log("メモ０を保存します");
   memoContent0Js=document.memoForm0.memoContent0.value;
    localStorage.setItem('content0',memoContent0Js);
    console.log(memoContent0Js);
    memo0.innerHTML=memoContent0Js;
    // document.write('<textarea></textarea>');
}
