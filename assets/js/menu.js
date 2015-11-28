;(function($) {
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}

	function addCategory(category) {
		$('#header nav ul').append('<li><a href="#" id="top-link"><span class="icon '+category.icon+'">'+category.label.capitalize()+'</span></a></li>');
	}

	for (var i = 0; i <= categories.length - 1; i++) {
		addCategory(categories[i]);
	};
})(jQuery);