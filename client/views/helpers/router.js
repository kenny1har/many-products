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
	this.route('createCategory', {
		path: '/createCategory',
		controller: 'CategoryCreateController'
	});
	this.route('createProduct', {
		path: '/createProduct',
		controller: 'ProductCreateController'
	});
	this.route('viewProduct', {
		path: '/:userId/:categoryId/:_id',
		controller: 'ProductViewController'
	});
	this.route('viewCategory', {
		path: '/:userId/:_id',
		controller: 'CategoryViewController'
	});
	this.route('viewUser', {
		path: '/:_id',
		controller: 'UserViewController'
	});
});
