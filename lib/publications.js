getCategories = function(userId) {
	return Categories.find({userId: userId}, {sort: {name: 1}});
}
getCategory = function(categoryId) {
	return Categories.find({_id: categoryId});
}
getProductsByUser = function(userId) {
	return Products.find({userId: userId}, {sort: {name: 1}});
}
getProductsByCategory = function(categoryId) {
	return Products.find({categoryId: categoryId}, {sort: {name: 1}});
}
getUsers = function(limit) {
	return Meteor.users.find({}, {limit: limit});
}
