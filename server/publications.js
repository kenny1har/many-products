Meteor.publish('users', function(limit) {
	return getUsers(limit);
});
Meteor.publish('get_shop', function(shopId) {
	return getShop(shopId);
});
Meteor.publish('get_shops', function(userId) {
	return getShops(userId);
});
Meteor.publish('get_category', function(categoryId) {
	return getCategory(categoryId);
});
Meteor.publish('get_categories', function(shopId) {
	return getCategories(shopId);
});
Meteor.publish('get_products_by_category', function(categoryId) {
	return getProductsByCategory(categoryId);
});
Meteor.publish('get_products_by_shop', function(shopId) {
	return getProductsByShop(shopId);
});
Meteor.publish('get_products_by_user', function(userId) {
	return getProductsByUser(userId);
});
