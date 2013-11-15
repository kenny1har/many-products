HomeController = RouteController.extend({
	template: 'homeView',
	before: function() {
		Meteor.subscribe('users', 10);
	},
	data: {
		usersList: function() {
			return Meteor.users.find();
		},
		usersCount: function() {
			return Meteor.users.find().count();
		}
	}
});
