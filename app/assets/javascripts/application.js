// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
// require turbolinks
//= require tinymce
//= require_tree .

var hide_spinner = function() {
	$('#spinner').hide();
}

var show_spinner = function() {
	$('#spinner').show();
}


var navbar_mobile = function() {
	const mq = window.matchMedia('(min-width: 768px)');
	if (mq.matches){
		$('#navbar-responsive').removeClass('navbar-mobile');
	}
	else{
		$('#navbar-responsive').addClass('navbar-mobile');
	}
}

$(document).ready(function() {
	$(window).scroll(function() {
	    var top_of_element = $("#art-element-content").offset().top;
	    var bottom_of_element = $("#art-element-content").offset().top + $("#art-element-content").outerHeight();
	    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	    var top_of_screen = $(window).scrollTop();
	    var bottom_of_fixed_element = $("#element-social-share").offset().top + $("#element-social-share").outerHeight();
	    var top_of_fixed_element = $("#element-social-share").offset().top;
	    if( top_of_screen >= top_of_element ){
	    	$(".art-body-content").addClass("element-fixed");
	    	if (bottom_of_fixed_element = bottom_of_element){
	    		$(".art-body-content").removeClass("element-fixed");
	    		$(".art-body-content").addClass("element-abs-bottom");
	    	}
	    }
	    else {
	        $(".art-body-content").removeClass("element-fixed");
	    }
	});
});

window.addEventListener('load', navbar_mobile, false);
window.addEventListener('resize', navbar_mobile, false);
