/*
 * jQuery Accordion
 * Author : Themegoblin
 * Author Url : http://www.themegoblin.com
 * Developer : Lufti Nurfahmi
 * MIT Licensed.
 */

(function($) {

	$.fn.accordion = function(options) {
		// this.element = element;

		var obj = this,
		    selector = obj.selector,
		    defaults = {
			classButton : 'btn',
			classContent : 'content',
			active : 'active',
			theme : 'light',
			transitionSpeed : 300,
			firstOpen : false
		};

		// merge
		var options = $.extend({}, defaults, options);
		var height = 0;

		var height = $(selector).children().outerHeight(true);
			// console.log(selector);
			

		
		// console.log(selector);
		$(window).load(function() {
			
			$(selector).addClass('accordion ' + options.theme);
			
			if (options.firstOpen === true) {
				
					$(selector).children().first().children().addClass('active');

					$(selector).children().first().find('.'+options.classContent).css({
						'max-height' : height,
						'transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-webkit-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-moz-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-ms-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-o-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out'
					});
			}
		});

		$(document).ready(function() {

			$('.' + options.classContent).css({
				'max-height' : 0,
				'overflow' : 'hidden'
			});

			$(selector + '.' + options.classButton).each(function() {
				if ($(this).children().hasClass(options.active)) {
					$(this).siblings('.' + options.classContent).addClass(options.active).css({
						'max-height' : height,
						'transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-webkit-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-moz-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-ms-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
						'-o-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out'
					});
				}
			});
		});

		// check for clicks
		
		
		$(selector).children().find('.' + options.classButton).click(function() {

			var obj = $(this);
				// console.log(obj);
			var slide = true;

			if (obj.hasClass(options.active)) {
				slide = false;
			}

			// remove active
			$(selector).find('.' + options.classContent).css({
				'max-height' : 0,
				'overflow' : 'hidden'
			}).removeClass(options.active);

			$(selector).children().find('.' + options.classButton).removeClass(options.active);

			// check slide
			if (slide) {
				obj.addClass(options.active);
				obj.siblings('.' + options.classContent).addClass(options.active).css({
					'max-height' : height,
					'transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
					'-webkit-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
					'-moz-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
					'-ms-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out',
					'-o-transition' : 'all ' + options.transitionSpeed + 'ms ease-in-out'
				});

			}

			return false;
		});

	};

	// new accordion();
})(jQuery);
