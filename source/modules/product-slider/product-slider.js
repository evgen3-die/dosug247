$('.product-slider').each(function(index, el) {
	var $that = $(this);
	var $top = $(this).find('.product-slider__top');
	var $bottom = $(this).find('.product-slider__bottom');
	var $topItems = $top.find($top.selector + '__item');

	$top.after('<div class="' + 'product-slider__temp' + '"></div>');
	var $temp = $('.product-slider__temp');

	$temp.hide().html($top.html());

	$top.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: $bottom.selector,
		adaptiveHeight: true
	});

	$bottom.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: $top.selector,
		focusOnSelect: true,
		infinite: true,
		adaptiveHeight: true
	});


	$top.on('click', '.slick-slide', function (e) {
		e.preventDefault();

		var index = $(this).data("slick-index");

		$temp.find('a').eq(index).trigger('click');

	});

	enquire.register("screen and (min-width:700px) and (min-height:500px)", {

		match : function() {
			$temp.find('a').colorbox({
				rel: 'gal',
				photo: true,
				transition: 'none',
				title: function () {
					var t = $(this);
					var title = t.data('title');

					//$bottom.slick('slickGoTo', t.index(), true);

					if (title) return title;
					else return '';
				},
				maxWidth: "100%",
				maxHeight: "100%",
				current: "{current} из {total}",
				onOpen: function(){
					//$bottom.slick("slickSetOption", "waitForAnimate", false, false);
					//$top.slick("slickSetOption", "waitForAnimate", false, false);


					$("#colorbox").css("opacity", 0);
				},
				onClosed: function() {
					//$bottom.slick("slickSetOption", "waitForAnimate", true, false);
					//$top.slick("slickSetOption", "waitForAnimate", true, false);
				},
				onComplete : function() {
					$("#colorbox").css("opacity", 1);
				}
			});
		},
		unmatch : function() {
			$.colorbox.remove();
		}
	});



});
