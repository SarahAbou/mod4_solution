(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl: 'src/MenuApp/templates/categorieslist1.template.html',
  bindings: {
    categories: '<'
  }
});

})();
