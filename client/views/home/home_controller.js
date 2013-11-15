HomeController = RouteController.extend({
	template: 'homeView',
	before: function() {
		this.subscribe('get_shops').wait();
	},
	data: {
		title: 'TokoFBkita',
		shops: function() {
			return getShops();
		}
	}
});
