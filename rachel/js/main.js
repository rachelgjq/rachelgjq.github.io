jQuery(document).ready( function($) {

	if( $.fn.fsvs ) {
		var slider = $.fn.fsvs({
			speed : 1000,
			nthClasses : 6,
			mouseDragEvents : false
		});
	}

	if( $.fn.flare ) {
		var flares = $('.flare').flare();
		for( var flare in flares ) {
			//flares[flare].reset();
		}
	}

	var sectionHeight = $('#container > .slider:eq(0)').height();
	$('#container > .slider').each( function(){
		var section = $(this),
			item = $('.item', section ),
			demo = $('.demo', section ),
			itemHeight = item.outerHeight(),
			demoHeight = demo.outerHeight();
		item.css({
			marginTop : ( ( sectionHeight - itemHeight ) / 2 ) + 'px'
		});
		demo.css({
			marginTop : ( ( sectionHeight - demoHeight ) / 2 ) + 'px'
		});

	});

	$(window).load(function(){

	});

});