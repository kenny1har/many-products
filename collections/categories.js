Categories = new Meteor.Collection('categories');
Meteor.methods({
	postCategory: function (postAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new category.");
		var shop = Shops.findOne(postAttributes.shopId);
		if (!shop)
			throw new Meteor.Error(401, "This shop has been deleted.");
		if (shop.userId != user._id)
			throw new Meteor.Error(401, "This shop is not yours.");

		var category = _.extend(_.pick(postAttributes, 'name'), {
			userId: user._id,
			shopId: shop._id,
			submitted: new Date().getTime()
		});
		Categories.insert(category);
	},
	deleteCategory: function(id) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to delete category.");

		var category = Categories.findOne(id);
		if (!category)
			throw new Meteor.Error(401, "Category has been deleted.");
		if (category.userId != user._id)
			throw new Meteor.Error(401, "You are not authorized to delete this category.");
		Categories.remove(id);
	}
});
