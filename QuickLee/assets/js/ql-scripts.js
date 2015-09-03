var quickLee = {

	init: function(){
		this.responsiveMenu();
	},

	responsiveMenu: function(){

		$('<a class="toggle-menu" href="#">MENU</a>').prependTo('.main-menu').next('ul').addClass('hidden');

		$(document).on('click', '.toggle-menu', function(){
			$('.main-menu ul').toggleClass('hidden');
		});

	}

};

quickLee.init();