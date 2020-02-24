var season=localStorage.getItem("season");
	var seasonTitle=document.getElementById("seasonTitle");
if(season=="Spring")seasonTitle.innerText="春学期";
else				seasonTitle.innerText="秋学期";
