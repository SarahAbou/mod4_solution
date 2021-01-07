(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/MenuApp/templates/categorieslist.template.html',
    controller: 'categoriesListController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }

  })
  .state('items', {
    url: '/items/{cat}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: 'ItemsController as itemsList'
  });
}

})();
