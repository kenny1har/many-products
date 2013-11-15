ProductCreateController = RouteController.extend({
	template: 'productCreate',
	before: function() {
		if (Meteor.user()) {
			Meteor.subscribe('get_categories', Meteor.user()._id);
			Meteor.subscribe('get_products_by_user', Meteor.user()._id);
		}
	},
	data: {
		categories: function() {
			if (Meteor.user())
				return getCategories(Meteor.user()._id);
		},
		products: function() {
			if (Meteor.user())
				return getProductsByUser(Meteor.user()._id).map(function(product) {
					product.categoryName = Categories.findOne(product.categoryId).name;
					return product;
				});
		}
	},
	after: function() {
		Meteor.setTimeout(function() {
			$('#categoryId').focus();
		}, 1);
	}
});
ProductViewController = RouteController.extend({
	template: 'productsView'
});
