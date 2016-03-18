var $text = $('.catalog-item__text, .catalog-item__name, .catalog-item__metro, .catalog-item__tel, .girl-reduce .girl-reduce__name, .girl-reduce .girl-reduce__phone');

/*$text.dotdotdot({
	wrap: 'letter'
});*/

$(window).resize(function () {
	$text.trigger("update");
});
