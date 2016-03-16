
(function () {
	var $menuButton = $('.header-menu-button'),
		$menu = $('.header-menu'),
		activeClass = 'active';

	$menuButton.on('click', function (e) {
		e.preventDefault();

		$menu.toggleClass(activeClass);
		$menu.stop().slideToggle('fast');
	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest($menu.selector + ' ,' + $menuButton.selector).length && $menu.hasClass(activeClass)) {
			$menu.removeClass(activeClass);
			$menu.stop().slideUp('fast');
		}
	});

	$(window).on('resize', function () {
		if ($menu.hasClass(activeClass)) {
			$menu.removeClass(activeClass);
			$menu.stop().slideUp('fast');
		}

	});
}());
