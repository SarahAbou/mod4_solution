(function () {
'use strict';

angular.module('data')
.controller('categoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'categories'];
function CategoriesListController(MenuDataService, categories) {
  var categoriesList = this;
  categoriesList.categories = categories;
}

})();
