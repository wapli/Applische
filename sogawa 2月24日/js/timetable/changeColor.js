
var pageNum = localStorage.getItem('num'.toString());	

var colorCell=document.getElementsByClassName("colorCell");
for (let colorNum = 0; colorNum < colorCell.length; colorNum++) {
    colorCell[colorNum].addEventListener("click", ()=>{
            lecture.popPage();

        
            if(colorNum == 0){
                localStorage.setItem(season+'color'+pageNum.toString(), colorNum+12);
                var lecturePage=document.getElementById("a-"+pageNum.toString());
                changeColor(colorNum+12,lecturePage);
                }
                else{localStorage.setItem(season+'color'+pageNum.toString(), colorNum);
                var lecturePage=document.getElementById("a-"+pageNum.toString());
                changeColor(colorNum,lecturePage);
            }
    });
}



