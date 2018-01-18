var modal_function;

var is_modal_opened = function(){
	if( $('.modal').hasClass('modal-opened') ){
		return true;
	}
	else
		return false;
}

var modal_close = function(){
	$('.modal').removeClass('modal-opened');
}

var modal_open = function(){
	$('.modal').addClass('modal-opened');
}

modal_function = function(){
	$('.modal-sign-up-link').on('click', function(){
		if ( is_modal_opened() ){
			modal_close();
		}
		else
			modal_open();
	});
	$('.modal-close').on('click', function(){
		modal_close();
	});
}

//var init_sign_up_form;

/*init_sign_up_form = function(){
	$('#form-sign-up').on('ajax:error', function(event, xhr, status, error) {
		$('.modal-error').replaceWith("Error");
	});
}*/

$(document).ready(function(){
	modal_function();
//	init_sign_up_form();
})