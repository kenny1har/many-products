CategoryCreateController = LoginRequiredController.extend({
	template: 'categoryCreate',
	before: function() {
		this.subscribe('get_categories', this.params._id).wait();
		this.subscribe('get_shop', this.params._id).wait();
	},
	data: function() {
		var params = this.params;
		var data = {
			title: 'Create Categories',
			categories: function() {
				return getCategories(params._id);
			},
			shop: function() {
				return getShop(params._id).fetch()[0];
			}
		};
		return data;
	},
	after: function() {
		Meteor.setTimeout(function() {
			$('#categoryName').focus();
		}, 1);
	}
});
CategoryViewController = RouteController.extend({
	template: 'categoriesView',
	before: function() {
		this.subscribe('get_category', this.params._id).wait();
		this.subscribe('get_products_by_category', this.params._id).wait();
	},
	data: function() {
		var params = this.params;
		var category = getCategory(params._id).fetch()[0];
		var data = {
			title: function() {
				return category.name + ' - View Category';
			},
			categoryName: function() {
				return category.name;
			},
			products: function() {
				return getProductsByCategory(params._id);
			}
		};
		return data;
	},
});
