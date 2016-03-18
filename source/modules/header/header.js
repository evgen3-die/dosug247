
var $header    = $('.page__header'),
	$headerBottom = $header.find('.header__bottom'),
	$window    = $(window),
	offset     = $headerBottom.offset().top,
	classAdded = false;

 /*$window.scroll(function() {
	if ($window.scrollTop() > offset) {
		if (classAdded === false) {
			$header.addClass('header_fixed');
		}
		classAdded = true;
	}
	else {
		$header.removeClass('header_fixed');
		classAdded = false;
	}
});


$('.js-link-sroll a[href^="#"]').on('click',function (event) {
	event.preventDefault();
	var $heder = $('.header__top');
	var target = this.hash;
	var $target = $(target);

	if ($(this).parent().hasClass('main-menu-submenu__item')) {
		$('.main-menu-submenu__item').removeClass('main-menu-submenu__item_active');
		$(this).parent().addClass('main-menu-submenu__item_active');
	}

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top - $heder.outerHeight()
	}, 900, 'swing', function () {
		window.location.hash = target;
	});
});

$('.logo').click(function(event) {
	event.preventDefault();

	$('html, body').stop().animate({
		'scrollTop': 0
	}, 900, 'swing');
});
*/

$window.on('resize', function () {
	offset = $headerBottom.offset().top;
});


$window.scroll(function() {
	if ($window.scrollTop() > offset) {
		if (classAdded === false) {
			$header.addClass('page__header_fixed');
		}
		classAdded = true;
	}
	else {
		$header.removeClass('page__header_fixed');
		classAdded = false;
	}
});
