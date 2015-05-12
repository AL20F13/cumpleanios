// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$ ('#siguiente_fecha') .on ('top' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
	
}); 
});

$(document).ready(function(e) {
	var nombre;
	$('#btncontinuar').on('tap',function(){
		nombre=$('#txtnombre').val();
		
		
	});//click siguiente nombre
	
	$('#btncalcular').on('tap',function(){
		var fecha= new Date();
		

		fechaA = new Date(fecha.getFullYear() + '/' +(fecha.getMonth()+1) +'/'+ fecha.getDate());

		var diaC=$('#txtdia').val();
		var mesC=$('#txtmes').val();
		var yearC=$('#txtanio').val();

		fechaC=new Date(fecha.getFullYear() +'/'+ mesC +'/'+ diaC);
		fechaCA = fechaC;
		

	
	if(fechaC > fechaA)
	{
       cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	  
	}
	else
	{
	fechaC=new Date((fecha.getFullYear()+1) +'/'+ mesC +'/'+ diaC);
	  cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	   
	}
	$('#nombre').text(nombre +' FALTA');
		$('#dias').text(faltan);
		if (faltan==1)
		{
		$('#cumple').text('DIA PARA TU CUMPLE');
		}
		else
		{
			$('#cumple').text('DIAS PARA TU CUMPLE');
		}
		if (faltan <7)
		{
				
	$('#felicidades').show();}

		edad=fecha.getFullYear()-yearC;
		if (fechaCA > fechaA)
		{
			edad=edad-1;
			$('#edad').text('TIENES '+ edad  + ' AÑOS HOY');
		}
		else
		{
		$('#edad').text('TIENES '+ edad  +  'AÑOS HOY');
		}
			function redondeo(numero, decimales)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
return resultado;
}
});// click sig fecha
 $('#btn_inicio').on('tap',function() {
	 navigator.vibrate(1000);
	 $('#txtnombre').val('');
	  $('#txtdia').val('');
	  $('#txtmes').val('');
	  $('#txtanio').val('');
	});//ready
 });
