var drawer_function;

var drawer_open = function(){
	$('body').addClass('js-drawer-right');
}

var drawer_close = function(){
	$('body').removeClass('js-drawer-right');
}

var is_drawer_opened = function(){
	if ( $('body').hasClass('js-drawer-right') ){
		return true;
	}
	else
		return false;
}

drawer_function = function(){
	$('.drawer-sign-in').on('click', function(){
		if ( is_drawer_opened() ){
			drawer_close();
		}
		else{
			drawer_open();
		}
	})
	$('.drawer-close').on('click', function(){
		if ( is_drawer_opened() ){
			drawer_close();
		}
		else{
			drawer_open();
		}
	})
}

$(document).ready(function(){
	drawer_function();
})