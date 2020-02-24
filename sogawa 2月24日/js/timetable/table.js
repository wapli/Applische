var season=localStorage.getItem("season");
for(var i=0;i<42;i++){
    var colorNum=Number(localStorage.getItem(season+'color'+i.toString()));;
    var lectures=document.getElementById("a-"+i.toString());
     changeColor(colorNum,lectures);
    document.getElementById("a-"+i.toString()+"c").innerText=localStorage.getItem(season+'kyouka'+i.toString());
    document.getElementById("a-"+i.toString()+"p").innerText=localStorage.getItem(season+'RoomContentmemo'+i.toString());
    }

    function changeColor(color,lectureNum){
        // console.log(color+"：色の番号");
        // console.log(lectureNum+"：講義id");
        
        switch (color) {
        
        case 1:
            lectureNum.style.backgroundColor="#fc93ae";
            break;
        case 2:
            lectureNum.style.backgroundColor="#ff6b6b";
            break;
        case 3:
            lectureNum.style.backgroundColor="#c4eeee";
            break;
        case 4:
            lectureNum.style.backgroundColor="#655bee";
            break;
        case 5:	
            lectureNum.style.backgroundColor="#98fb98";
            break;
        case 6:
            lectureNum.style.backgroundColor="#f2fdc1";
            break;
        case 7:
            lectureNum.style.backgroundColor="#fdc867";
            break;
        case 8:
            lectureNum.style.backgroundColor="#fafaa0";
            break;
        case 9:
            lectureNum.style.backgroundColor="#b8a5e4";
            break;
        case 10:	
            lectureNum.style.backgroundColor="#d0ffc0";
            break;
        case 11:
            lectureNum.style.backgroundColor="#f0ffff";
            break;
        case 12:
            lectureNum.style.backgroundColor="#fdc3cc";
            break;
        default:
            break;
        }
        }
        //色関数ここまで　曽川
        