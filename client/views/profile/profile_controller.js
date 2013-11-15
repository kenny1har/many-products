ProfileController = LoginRequiredController.extend({
	template: 'viewProfile',
	data: {
		profile: function() {
			Meteor.call('getProfile');
			return Session.get('profile');
		},
		email: function() {
			return Meteor.user().emails[0].address;
		}
	},
	after: function() {
		Meteor.setTimeout(function() {
			$('[name=name]').focus();
		}, 1);
	}
});

Template.viewProfile.events({
	'submit form': function(event) {
		event.preventDefault();
		var user = Meteor.user();
		if (!user)
			throwError("You need to login to post new product.");
		var profile = {
			name: $(event.target).find('[name=name]').val()
		};
		Meteor.call('updateProfile', profile, function(error, id) {
			if (error)
				throwError(error.reason);
			// Router.go('home');
		});
	}
});
