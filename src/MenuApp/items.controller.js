(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams','MenuDataService'];
function ItemsController($stateParams,MenuDataService) {
  var itemsList = this;
  itemsList.item = $stateParams.cat;
  itemsList.$onInit = function(){
    MenuDataService.getItemsForCategory($stateParams.cat)
      .then(function (result) {
        itemsList.items = result.menu_items;
      });
  }


}

})();
