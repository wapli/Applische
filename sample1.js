document.getElementById("p1").style.display="none";

function a(){
    const p1=document.getElementById("p1");

    if(p1.style.display=="block"){

        p1.style.display="none";
    }else{
        p1.style.display="block";
    }
}