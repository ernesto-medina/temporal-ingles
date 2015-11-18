$.fn.success = function(){
	this.removeClass("error warning").addClass('success').val("Continuar...");
}
$.fn.wrong = function(){
	this.removeClass("success warning").addClass('error').val("Revisa tus respuestas");	
}
$.fn.warning = function(){
	this.removeClass("error success").addClass('warning').val("Faltan por contestar");	
}
$.fn.inputWarning = function(){
	this.removeClass("border-error").addClass('border-warning');	
}
$.fn.inputError = function(){
	this.removeClass("border-warning").addClass('border-error');	
}
//funcion pra agregar clase a los espacios
$.fn.toggleClasses = function(){
	//añade clase para el borde cuando esta selected
	this.parents(".question").find(".border-azul").removeClass('border-azul');
	this.addClass("border-azul");
}
//funcion para mostrar siguiente box
function showNext(next){
	var content = $(".question-wrap"),
		contentFirst = $(".question-wrap:first"),
		result = $(".result"),
		validate = $(".submit"),
		nextElement = $(".question-wrap.current").removeClass('current').next(".question-wrap");

	if(nextElement.length){
		validate.show();
		next.hide();
		result.val("Resultado").removeClass('success warning error');
		nextElement.addClass('current').slideDown();
	}else{
		contentFirst.addClass('current');
		restartGame();
	}
}
//funcion para validar
$.fn.validateAnswer = function(){
	var inputVal = this.val().trim().toLowerCase(),
		answer = this.siblings(),
		answerVal = answer.text().trim().toLowerCase();

	if(inputVal === ""){
    	this.inputWarning();
    	$(".result").wrong();
	}
	else if(inputVal != "" && inputVal != answerVal){
    	this.inputError();
    	$(".result").wrong();
	}
	if(inputVal === answerVal){
		this.hide();
		answer.show();
	}
}
//reiniciar
function restartGame(){
	var next = $(".next"),
		result = $(".result"),
		input = $(".answer-input")
		answer = $(".answer"),
		validate = $(".submit");

	next.removeClass("restart").hide();
	input.show().val("");
	answer.hide();
	result.val("Resultado").removeClass("success warning error");
	validate.show();
}
//funcion que valida si el input dejo de estar en blanco
function validateInput(){
	$(".answer-input").each(function(){
		$(this).on("focusout", function(){
			if($(this).val().trim() != ""){
				$(this).removeClass("border-warning border-error");
			}
		});
	});
}
$(document).on("ready", function(){
	var validate = $(".submit"),
		option = $(".option"),
		next = $(".next"),
		result = $(".result");

	validateInput();
	option.each(function(){
		var input = $(this).find(".answer-input");
			inputVal = $(this).find(".answer-input").val();
		    answer = $(this).find(".answer").text();
		
		input.on("click", function(){
			$(this).toggleClasses();
			$(this).on("focusout", function(){
				$(this).removeClass('border-azul');
			});
		});
	});
	//funciones para boton validar
	validate.on("click", function(){
		$(".question:visible .option").each(function(){
			$(this).find(".answer-input").each(function(){
				$(this).validateAnswer();
			});
		});
		if($(".question:visible .answer").length === $(".answer:visible").length){
			result.success();	
			validate.hide();
			next.show();
		}
		if($(".question").last().is(":visible") === true){
			if($(".question:visible .answer").length === $(".answer:visible").length){
				result.val("Felicidades has completado la actividad...");	
				next.addClass('restart');
			}
		}
	});
	//funciones para boton next
	next.on("click", function(){
		showNext($(this));
	});
});