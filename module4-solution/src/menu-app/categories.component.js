(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/menu-app/templates/categories.template.html',
        bindings: {
            categoryItems: '<'
        }
    })
})();