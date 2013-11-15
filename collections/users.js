Users = Meteor.users;
Meteor.methods({
	updateProfile: function (postAttributes) {
		var user = Users.findOne(Meteor.user()._id);
		postAttributes.name = (postAttributes.name);
		if (postAttributes.name == '')
			postAttributes.name = '(blank)';
		if (user.profile == null)
			user.profile = {};
		var profile = _.extend(user.profile, {
			name: postAttributes.name
		});
		Users.update(Meteor.user()._id, {$set: {profile: profile}});
	},
	getProfile: function() {
		var user = Users.findOne(Meteor.user()._id);
		if (user.profile.name == '(blank)')
			user.profile.name = '';
		Session.set('profile', user.profile);
	}
});
