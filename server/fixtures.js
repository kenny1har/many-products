Accounts.onCreateUser(function(options, user) {
	if (!options.profile)
		options.profile = {
			name: ''
		};
	if (options.profile.name == '')
		options.profile.name = '(blank)';

	if (options.profile)
		user.profile = options.profile;
	return user;
});
