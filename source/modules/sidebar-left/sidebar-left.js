


(function () {
	$('.sidebar-left__scroll').perfectScrollbar();

	var $menuButton = $('.sidebar-left-button'),
		$menu = $('.sidebar-left'),
		activeClass = 'active';

	window.pagePosition = 0;

	window.sidebarOpen = function () {
		window.pagePosition = $(window).scrollTop();

		$('body').css({
			'top': -window.pagePosition + 'px',
			'position': 'fixed'
		});


		$menu.addClass(activeClass);

		$menuButton.addClass(activeClass);
	};

	window.sidebarClose = function () {
		$menu.removeClass('active');
		$menuButton.removeClass('active');

		$('body').css({
			'position': 'static'
		});

		$(window).scrollTop(window.pagePosition);
	};

	$menuButton.on('click', function (e) {
		e.preventDefault();

		if ($menu.hasClass(activeClass)) {
			window.sidebarClose();
		} else {
			window.sidebarOpen();
		}

	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest($menu.selector + ' ,' + $menuButton.selector).length && $menu.hasClass('active')) {
			window.sidebarClose();
		}
	});
}());
