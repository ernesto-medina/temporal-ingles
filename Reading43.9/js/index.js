$(document).on("ready", function(){
	$(".button button.submit").on("click", function(){
		var respuestasCorrecta = $('input.correcta:checked').length,
			respuestasIncorrecta = $('input.error:checked').length,
			radio = $('input:checked').length,
			filas = $("table tbody tr").length;

		if(respuestasCorrecta === filas){
			$("table tbody tr input").attr("disabled",true);
			$(this).hide();
			$("button.reset").show();
			$(".result input").removeClass("error warning").addClass('success').val("Felicidades");
		}else if(respuestasIncorrecta){
			$(".result input").removeClass("success warning").addClass('error').val("Intentalo de nuevo");
		}
		if(radio < filas){
			$(".result input").removeClass("error success").addClass('warning').val("Faltan por contestar");
		}
	});
	$(".button button.reset").on("click", function(){
		$("table tbody tr input").attr({"disabled":false, "checked": false});
		$(this).hide();
		$(".button button.submit").show();
		$(".result input").removeClass("error success warning").val("Resultado");
	});
});