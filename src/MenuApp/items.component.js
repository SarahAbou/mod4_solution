(function () {
'use strict';

angular.module('data')
.component('itemsList', {
  templateUrl: 'src/MenuApp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
