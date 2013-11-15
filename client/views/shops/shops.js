Template.shopForm.events({
	'submit form': function(event) {
		event.preventDefault();
		var shop = {
			name: $(event.target).find('[name=shopName]').val()
		}
		Meteor.call('postShop', shop, function(error, id) {
			if (error)
				throwError(error.reason);
		});
		$(event.target).find('input[type=text]').val('');
		$(event.target).find('input[type=text]:first').focus();
	}
})
Template.shopItem.events({
	'click .delete': function(event) {
		Meteor.call('deleteShop', $(event.target).attr('shopId'), function(error, id) {
			if (error)
				return alert(error.reason);
		});
	}
})