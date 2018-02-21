var floating_social_share;

floating_social_share = function(){
    var top_of_element = $("#art-element-content").offset().top;
    var bottom_of_element = $("#art-element-content").offset().top + $("#art-element-content").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    var bottom_of_fixed_element = $("#element-social-share").offset().top + $("#element-social-share").outerHeight();
    var top_of_fixed_element = $("#element-social-share").offset().top;
    if( top_of_screen >= top_of_element ){
    	$(".art-body-content").addClass("element-fixed");
    	if (bottom_of_fixed_element == bottom_of_element){
    		$(".art-body-content").removeClass("element-fixed");
    		$(".art-body-content").addClass("element-abs-bottom");
    	}
    }
    else {
        $(".art-body-content").removeClass("element-fixed");
    }
}



/*$(window).scroll(function() {
	floating_social_share();
});*/