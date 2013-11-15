ShopCreateController = LoginRequiredController.extend({
	template: 'shopCreate',
	before: function() {
		this.subscribe('get_shops', Meteor.user()._id).wait();
	},
	data: {
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
		this.subscribe('get_products_by_shop', this.params._id).wait();
	},
	data: function() {
		var params = this.params;
		var data = {
			shopName: function() {
				var shop = getShop(params._id).fetch()[0];
				return shop.name;
			},
			products: function() {
				return getProductsByShop(params._id);
			}
		};
		return data;
	},
});
