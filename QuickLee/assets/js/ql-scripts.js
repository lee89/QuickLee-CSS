var quickLee = {

	init: function(){
		// Activate responsive menu
		this.responsiveMenu();
	},

	responsiveMenu: function(){

		// Create toggle button
		$('<a class="toggle-menu" href="#">MENU</a>').prependTo('.main-menu').next('ul').addClass('hidden');

		// Toggle menu
		$(document).on('click', '.toggle-menu', function(){
			$('.main-menu ul').toggleClass('hidden');
		});

	}

	/**
	 * yourJavascript: function(){
	 * 	your functions here
	 * }
	 */

};

// Initialise QuickLee-CSS javascript
quickLee.init();