Router.configure({
	layoutTemplate: 'layout',
	yieldTemplates: {
		'header': {to: 'myHeader'},
		'errors': {to: 'myErrors'}
	},
	loadingTemplate: 'loading'
});

Router.map(function () {
	this.route('home', {
		path: '/',
		controller: 'HomeController'
	});
	this.route('createShop', {
		path: '/createShop',
		controller: 'ShopCreateController'
	});
	this.route('createCategory', {
		path: '/createCategory/:_id',
		controller: 'CategoryCreateController'
	});
	this.route('createProduct', {
		path: '/createProduct/:_id',
		controller: 'ProductCreateController'
	});
	this.route('profile', {
		path: '/profile',
		controller: 'ProfileController'
	});
	this.route('viewUser', {
		path: '/user/:_id',
		controller: 'UserViewController'
	});
	this.route('viewProduct', {
		path: '/:shopId/:categoryId/:_id',
		controller: 'ProductViewController'
	});
	this.route('viewCategory', {
		path: '/:shopId/:_id',
		controller: 'CategoryViewController'
	});
	this.route('viewShop', {
		path: '/:_id',
		controller: 'ShopViewController'
	});
});
