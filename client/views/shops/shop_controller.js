ShopCreateController = LoginRequiredController.extend({
	template: 'shopCreate',
	before: function() {
		this.subscribe('get_shops', Meteor.user()._id).wait();
	},
	data: {
		title: 'Create Shops',
		shops: function() {
			return getShops(Meteor.user()._id);
		}
	},
	after: function() {
		Meteor.setTimeout(function() {
			$('#shopName').focus();
		}, 1);
	}
});
ShopViewController = RouteController.extend({
	template: 'shopsView',
	before: function() {
		this.subscribe('get_shop', this.params._id).wait();
		this.subscribe('get_categories', this.params._id).wait();
	},
	data: function() {
		var params = this.params;
		var shop = getShop(params._id).fetch()[0];
		var data = {
			title: function() {
				return shop.name + ' - Shop';
			},
			shop: function() {
				return shop;
			},
			categories: function() {
				return getCategories(params._id);
			}
		};
		return data;
	},
});
