//funcion para crear las opciones por cada select
$.fn.createOptions = function(wraper){
	this.find("select option").each(function(){					
		wraper.append("<div class='btn border-green "+ $(this).hasClass('good') +"'>"+$(this).val() +"</div>");
	});
}
$.fn.success = function(){
	this.removeClass("error").addClass('success').val("Continuar...");
}
$.fn.wrong = function(){
	this.removeClass("success").addClass('error').val("Revisa tus respuestas");	
}
//funcion para agregar clases de seleccion en las opciones
$.fn.activeBtn = function(select){
	select.text(this.text());
	select.addClass("select");
	this.parent().find(".active").removeClass('active');
	this.addClass("active");
}
//funcion pra agregar clase a los espacios
$.fn.toggleClasses = function(){
	//añade clase para el borde cuando esta selected
	this.parents(".container").find(".border-azul").removeClass('border-azul');
	this.addClass("border-azul");
	//muestra opciones y ocultas las demas
	this.parents(".container").find(".show").removeClass('show');
	this.children(".options").addClass("show");
}
//funcion para mostrar siguiente box
function showNext(next){
	var content = $(".question-wrap"),
		contentFirst = $(".question-wrap:first"),
		result = $(".result"),
		validate = $(".submit"),
		nextElement = $(".question-wrap.current").removeClass('current').next(".question-wrap");

	if(nextElement.length){
		next.hide();
		result.val("Resultado").removeClass('success');
		nextElement.addClass('current').slideDown();
	}else{
		contentFirst.addClass('current');
		restartGame();

	}
}
//funcion para mostrar boton
function showBtnValidate(){
	var totalSelects = $(".select-option:visible .active").length,
		totalInputs = $(".select-option:visible").length,
		options = $(".options"),
		validate = $(".submit");

	if(totalSelects === totalInputs){
		validate.show();
		setTimeout(function(){
			options.removeClass("show").hide();
		}, 100);
	}
}
//funcion para validar
function validateAnswer(){
	var content = $(".question-wrap"),
		next = $(".next"),
		validate = $(".submit"),
		result = $(".result"),
		totalSelects = $(".select-option:visible .active").length,
		totalTrue = $(".select-option:visible .active.true").length,
		totalInputs = $(".select-option:visible").length,
		input = $(".select-option:visible");


	if(totalSelects != totalTrue){
		result.wrong();
	}
	else if(totalInputs === totalTrue){
		result.success();
		next.show();
		input.off("click").removeClass("border-azul");
		validate.hide();
	}
	if(content.last().is(":visible") === true){	
		if(totalInputs === totalTrue){
			next.addClass("restart");
			result.val("Felicidades has completado la actividad...");
		}
	}
}
//reiniciar
function restartGame(){
	var next = $(".next"),
		result = $(".result"),
		text = $(".label"),
		options = $(".options");

	next.removeClass("restart").hide();
	result.val("Resultado").removeClass("success");
	text.text("clic").removeClass("select");
	options.each(function(){
	    $(this).find(".btn").remove();
	});
	initialize();
}
//funcion inicial
function initialize(){
	var next = $(".next"),
		validate = $(".submit"),
		question = $(".question");

	question.each(function(){
		var selects = $(this).find(".select-option");

		selects.each(function(){
			var wraper = $(this).find(".options");

			$(this).createOptions(wraper);
			$(this).on("click", function(){
				$(this).toggleClasses();
			});
		    wraper.find(".btn").each(function(){
		        $(this).on("click", function(){
		        	var select = $(this).parents(".select-option").find(".label");

		            $(this).activeBtn(select);
		            showBtnValidate();
		        });             
		    });
		});
	});
	//funciones para boton validar
	validate.on("click", function(){
		validateAnswer();
	});
	//funciones para boton next
	next.on("click", function(){
		showNext($(this));
	});
}
$(document).on("ready", function(){
	initialize();	
});