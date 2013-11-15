LoginRequiredController = RouteController.extend ({
	before: function () {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
			this.stop();
		} else if (! Meteor.user()) {
			this.redirect('home');
		}
		// this.render();
	}
});
