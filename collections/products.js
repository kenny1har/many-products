Products = new Meteor.Collection('products');
Meteor.methods({
	postProduct: function (postAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to log in to post new product.");
		var category = getCategory(postAttributes.categoryId).fetch()[0];
		if (category.userId != user._id)
			throw new Meteor.Error(401, "Your are not authorized in this category.");
		var shop = getShop(category.shopId).fetch()[0];
		if (!shop)
			throw new Meteor.Error(401, "This shop is not exists.");
		if (shop.userId != user._id)
			throw new Meteor.Error(401, "You are not authorized in this shop.");
		var product = _.extend(_.pick(postAttributes, 'name', 'price', 'description'), {
			categoryId: category._id,
			shopId: shop._id,
			userId: user._id,
			submitted: new Date().getTime()
		});
		Products.insert(product);
	},
	deleteProduct: function(id) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new product.");

		var product = Products.findOne(id);
		if (product.userId != user._id)
			throw new Meteor.Error(401, "You are not authorized to delete this product.");
		if (!product)
			throw new Meteor.Error(401, "Product has been deleted.");
		Products.remove(id);
	}
});
