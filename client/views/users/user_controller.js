UserViewController = RouteController.extend({
	template: 'userView',
	before: function() {
		Meteor.subscribe('get_categories', this.params._id);
	},
	data: function() {
		var params = this.params;
		var data = {
			userId: function() {
				return params._id;
			},
			categories: function() {
				return getCategories(params._id);
			}
		};
		return data;
	}
});
