Meteor.publish('categories_asc', function() {
	return categoriesAsc();
});
Meteor.publish('categories_desc', function() {
	return categoriesDesc();
});
Meteor.publish('users', function(limit) {
	return getUsers(limit);
});
Meteor.publish('get_category', function(categoryId) {
	return getCategory(categoryId);
});
Meteor.publish('get_categories', function(userId) {
	return getCategories(userId);
});
Meteor.publish('get_products_by_category', function(categoryId) {
	return getProductsByCategory(categoryId);
});
Meteor.publish('get_products_by_user', function(userId) {
	return getProductsByUser(userId);
});
