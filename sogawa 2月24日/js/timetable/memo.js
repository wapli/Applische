var pageNum = localStorage.getItem('num'.toString());
var memoSaveButton=document.getElementById("memoSaveButton");
				
document.getElementById("memoarea").value=localStorage.getItem(season+"MemoContent"+pageNum.toString());
memoSaveButton.addEventListener("click", () => {
    var memoareaContent=document.getElementById("memoarea").value;
    localStorage.setItem(season+"MemoContent"+pageNum.toString(),memoareaContent);
    alert("保存しました")
    lecture.popPage();
},false);

