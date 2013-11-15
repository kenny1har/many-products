/*LoginRequiredController = RouteController.extend ({
	waitOn:function ()  {
		return Meteor.subscribe('currentUser');
	},
	before: function () {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
			this.stop();
		} else if (! Meteor.user()) {
			this.redirect('loginSignup');
		}
	}
});
*/