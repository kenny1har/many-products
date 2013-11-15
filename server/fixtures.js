Accounts.onCreateUser(function(option, user) {
	if (!options.profile)
		option.profile = {
			name: ''
		};
	if (option.profile.name == '')
		option.profile.name = '(blank)';

	if (options.profile)
		user.profile = options.profile;
	return user;
});
