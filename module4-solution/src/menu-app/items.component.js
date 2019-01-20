(function () {
    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/menu-app/templates/items.template.html',
        bindings: {
            itemsFromCategory: '<'
        }
    })
})();