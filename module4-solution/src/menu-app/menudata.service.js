(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var srv = this;

        srv.getAllCategories = function () {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            })
        }

        srv.getItemsForCategory = function (categoryShortName) {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params: { category: categoryShortName }
            })
        }
    }
})();