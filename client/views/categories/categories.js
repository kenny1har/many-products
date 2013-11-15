/*Template.categoriesList.helpers({
	categories: function() {
		return categoriesDesc();
	}
});*/

Template.categoryForm.events({
	'submit form': function(event) {
		event.preventDefault();
		var category = {
			name: $(event.target).find('[name=categoryName]').val()
		}
		Meteor.call('postCategory', category, function(error, id) {
			if (error)
				throwError(error.reason);
		});
		$(event.target).find('input[type=text]').val('');
		$(event.target).find('input[type=text]:first').focus();
	}
})
Template.categoryItem.events({
	'click .delete': function(event) {
		Meteor.call('deleteCategory', $(event.target).attr('categoryId'), function(error, id) {
			if (error)
				return alert(error.reason);
		});
	}
})