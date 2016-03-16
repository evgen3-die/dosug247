// Dropdown
$('.pseudo-dropdown').each(function(index, el) {
	var $that = $(this);
	var $trigger = $(this).find('.pseudo-dropdown__trigger');
	var $top = $(this).find('.pseudo-dropdown__top');
	var $list = $(this).find('.pseudo-dropdown-list__item');
	var $active = $(this).find('.pseudo-dropdown-list__item_active');
	var $dropdown = $(this).find('.pseudo-dropdown__list');
	var $scroll = $(this).find('.pseudo-dropdown-list');
	var triggerCheckbox = $(this).find('.pseudo-dropdown__trigger-checkbox');
	var triggerCheckboxText = '';

	var isCheckbox = $that.hasClass('pseudo-dropdown_checkbox');
	var isOpenned = $that.hasClass('pseudo-dropdown_checkbox-openned');

	var $triggerText = '';

	$scroll.perfectScrollbar();

	if (!isCheckbox) {

		// Set initial state
		if ($active.length > 0) {
			$triggerText = $active.text();
		}
		else {
			$triggerText = $list.first().text()
		}
	}

	if (isCheckbox) {
		triggerCheckboxText = triggerCheckbox.text();

		if ($list.find('[type=checkbox]:checked').length > 0) {
			triggerCheckbox.text('Выбрано ' + $list.find('[type=checkbox]:checked').length);
		} else {
			triggerCheckbox.text(triggerCheckboxText);
		}

		$list.find('[type=checkbox]').on('change', function () {
			if ($list.find('[type=checkbox]:checked').length > 0) {
				triggerCheckbox.text('Выбрано ' + $list.find('[type=checkbox]:checked').length);
			} else {
				triggerCheckbox.text(triggerCheckboxText);
			}
		});
	}

	$trigger.text($triggerText);

	// Show dorpdown
	if (!$that.hasClass('pseudo-dropdown_dropdown_open')) {
		$top.click(function(event) {
			event.preventDefault();
			// Close all open dropdowns
			if ($that.hasClass('pseudo-dropdown_dropdown_open')) {
				$that.toggleClass('pseudo-dropdown_dropdown_open');
				return;
			}

			$('.pseudo-dropdown').removeClass('pseudo-dropdown_dropdown_open');
			$that.toggleClass('pseudo-dropdown_dropdown_open');

			$scroll.perfectScrollbar('update');
		});
	}

	// Dropdown item click
	$list.click(function(event) {
		if (isCheckbox) return;

		event.preventDefault();

		var $triggerText = '';

		if ($(this).is('li') && $(this).text() != '') {
			$triggerText = $(this).text();
		}
		else {
			$triggerText = $(this).children('a').text();
		}
		$trigger.text($triggerText);

		$list.removeClass('pseudo-dropdown-list__item_active');
		$(this).addClass('pseudo-dropdown-list__item_active');

		$that.toggleClass('pseudo-dropdown_dropdown_open');

		if ($(this).attr('data-value').length > 0) {
			//alert('Selected: "' + $(this).attr('data-value') + '" (' + $triggerText + ')');
		}
	});

	// Outer click
	$(document).on('click', function(event) {
		var closeClassName = 'pseudo-dropdown';
		var $hideObject = $('.pseudo-dropdown__list');

		if (!$(event.target).closest('.'+closeClassName).length) {
			if ($hideObject.is(":visible")) {
				$('.pseudo-dropdown').removeClass('pseudo-dropdown_dropdown_open');
			}
		}
	});





});
