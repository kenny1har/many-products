Shops = new Meteor.Collection('shops');
Meteor.methods({
	postShop: function (postAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new shop.");
		var shop = _.extend(_.pick(postAttributes, 'name'), {
			userId: user._id,
			submitted: new Date().getTime()
		});
		Shops.insert(shop);
	},
	deleteShop: function(id) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to delete shop.");

		var shop = Shops.findOne(id);
		if (!shop)
			throw new Meteor.Error(401, "Shop has been deleted.");
		if (shop.userId != user._id)
			throw new Meteor.Error(401, "You are not authorized to delete this shop.");
		Shops.remove(id);
	}
});
