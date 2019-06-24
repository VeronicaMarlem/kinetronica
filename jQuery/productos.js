function mostrar_ocultar_r(){
	var resistenciasform = document.getElementById("resistenciasform");
	var resistenciasform1 = document.getElementById("resistenciasform1");
	var resistenciasform2 = document.getElementById("resistenciasform2");

	if (resistenciasform.style.display == "none") {
		document.getElementById("resistenciasform").style.display = "block";
		document.getElementById("resistenciasform1").style.display = "block";
		document.getElementById("resistenciasform2").style.display = "block";
	}else{
		document.getElementById("resistenciasform").style.display = "none";
		document.getElementById("resistenciasform1").style.display = "none";
		document.getElementById("resistenciasform2").style.display = "none";
	}
	
}
function mostrar_ocultar_c(){
	var capacitoresform = document.getElementById("capacitoresform");
	var capacitoresform1 = document.getElementById("capacitoresform1");
	var capacitoresform2 = document.getElementById("capacitoresform2");

	if (capacitoresform.style.display == "none") {
		document.getElementById("capacitoresform").style.display = "block";
		document.getElementById("capacitoresform1").style.display = "block";
		document.getElementById("capacitoresform2").style.display = "block";
	}else{
		document.getElementById("capacitoresform").style.display = "none";
		document.getElementById("capacitoresform1").style.display = "none";
		document.getElementById("capacitoresform2").style.display = "none";
	}
	
}
function mostrar_ocultar_d(){
	var diodosform = document.getElementById("diodosform");
	var diodosform1 = document.getElementById("diodosform1");
	var diodosform2 = document.getElementById("diodosform2");

	if (diodosform.style.display == "none") {
		document.getElementById("diodosform").style.display = "block";
		document.getElementById("diodosform1").style.display = "block";
		document.getElementById("diodosform2").style.display = "block";
	}else{
		document.getElementById("diodosform").style.display = "none";
		document.getElementById("diodosform1").style.display = "none";
		document.getElementById("diodosform2").style.display = "none";
	}
	
}

/*
$(document).ready(function(){
   $("#resistenciaslink").click(function(evento){
      if ($("#resistenciaslink").on("click")){
         $("#resistenciasform").css("display", "block");

         $("#capacitoresform").css("display", "none");

      }else{
         $("#resistenciasform").css("display", "none");
      }
   });
});

$(document).ready(function(){
   $("#capacitoreslink").click(function(evento){
      if ($("#capacitoreslink").on("click")){
         $("#capacitoresform").css("display", "block");
         $("#capacitoresform1").css("display", "block");
         $("#capacitoresform2").css("display", "block");
      }else{
         $("#capacitoresform").css("display", "none");
         $("#capacitoresform1").css("display", "none");
         $("#capacitoresform2").css("display", "none");
      }
   });
});*/
