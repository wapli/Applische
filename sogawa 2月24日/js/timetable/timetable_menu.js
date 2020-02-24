document.getElementById('SpringButton').addEventListener("click", () => {
	localStorage.setItem("season","Spring");					
	location.reload();
	
	  
});

document.getElementById("AutumnButton").addEventListener("click", () => {
	localStorage.setItem("season","Autumn");						
	location.reload();
	
	  
});

