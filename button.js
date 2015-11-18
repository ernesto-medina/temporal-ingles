$(document).ready(function(){

	function exists($selector) {
		if ($($selector).length) {
			return true;
		} else {
			return false;
		}
	}

	function back(){
		window.open('', '_self', '');
		window.close();
	}

	function div() {
		$html = ''+
			'<div class="close">'+
				'<img class="img" src="/iframe/salir.png" width="200" heigth="80"/>'+
			'</div>'
		;
		$('body').append($html);
		$('.close').css({
			width: 			'200px',
			height: 		'80px',
			position: 		'absolute',
			bottom: 		'50px',
			left: 			'0', 
			right: 			'0',
			margin: 		'0 auto',
			'z-index': 		'200',
			cursor: 		'pointer'
		});
		$('.close').css('top', 50);
		$('.close').css('left', $(window).width() / 1.5);
		$('.img').click(function() {
			back();
		});
	}

	setInterval(function() {
		if (!exists(".close")) {
			div();
		}
	}, 1000);
});