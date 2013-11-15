ProductCreateController = LoginRequiredController.extend({
	template: 'productCreate',
	before: function() {
		this.subscribe('get_category', this.params._id).wait();
		this.subscribe('get_categories', getCategory(this.params._id).fetch()[0].shopId).wait();
		this.subscribe('get_products_by_shop', getCategory(this.params._id).fetch()[0].shopId).wait();
		this.subscribe('get_shop', getCategory(this.params._id).fetch()[0].shopId);
	},
	data: function() {
		var params = this.params;
		var category = getCategory(params._id).fetch()[0];
		var data = {
			categories: function() {
				return getCategories(category.shopId);
			},
			products: function() {
				return getProductsByShop(category.shopId).map(function(product) {
					product.categoryName = getCategory(product.categoryId).fetch()[0].name;
					return product;
				});
			},
			shop: function() {
				return getShop(category.shopId).fetch()[0];
			}
		};
		return data;
	},
	after: function() {
		Meteor.setTimeout(function() {
			$('#categoryId').focus();
		}, 1);
	}
});
ProductViewController = RouteController.extend({
	template: 'productsView',
	before: function() {
		this.subscribe('get_category', this.params.categoryId).wait();
		this.subscribe('get_products_by_category', this.params._id).wait();
	},
	data: function() {
		var params = this.params;
		var data = {
			category: function() {
				return getCategory(Meteor.user()._id).fetch()[0];
			},
			products: function() {
				return getProductsByCategory(params._id).map(function(product) {
					product.categoryName = Categories.findOne(product.categoryId).name;
					return product;
				});
			}
		};
		return data;
	}
});
