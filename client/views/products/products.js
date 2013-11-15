Template.productForm.events({
	'submit form': function(event) {
		event.preventDefault();
		var user = Meteor.user();
		if (!user)
			throwError("You need to login to post new product.");
		var category = getCategory($(event.target).find('[name=categoryId]').val()).fetch()[0];
		var product = {
			name: $(event.target).find('[name=productName]').val(),
			categoryId: category._id
		};
		Meteor.call('postProduct', product, function(error, id) {
			if (error)
				throwError(error.reason);
		});
		$(event.target).find('input[type=text]').val('');
		$(event.target).find('input[type=text]:first').focus();
	}
});
Template.productItem.events({
	'click .delete': function(event) {
		Meteor.call('deleteProduct', $(event.target).attr('productId'), function(error, id) {
			if (error)
				return alert(error.reason);
		});
	}
});
