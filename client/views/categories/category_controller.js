CategoryCreateController = LoginRequiredController.extend({
	template: 'categoryCreate',
	before: function() {
		this.subscribe('get_categories', Meteor.user()._id).wait();
	},
	data: {
		categories: function() {
			return getCategories(Meteor.user()._id);
		}
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
	},
	data: function() {
		var params = this.params;
		var data = {
			categoryName: function() {
				var category = getCategory(params._id);
				console.log(category.fetch());
				return category.name;
			}
		};
		return data;
	},
});
