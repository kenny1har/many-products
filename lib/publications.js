getShop = function(shopId) {
	return Shops.find({_id: shopId});
}
getShops = function() {
	return Shops.find({}, {sort: {name: 1}});
}
getShopsByUser = function(userId) {
	return Shops.find({userId: userId}, {sort: {name: 1}});
}
getCategories = function(shopId) {
	return Categories.find({shopId: shopId}, {sort: {name: 1}});
}
getCategory = function(categoryId) {
	return Categories.find({_id: categoryId});
}
getProductsByShop = function(shopId) {
	return Products.find({shopId: shopId}, {sort: {name: 1}});
}
getProductsByCategory = function(categoryId) {
	return Products.find({categoryId: categoryId}, {sort: {name: 1}});
}
getUsers = function(limit) {
	return Meteor.users.find({}, {limit: limit});
}
