(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function RoutesConfig($urlRouterProvider, $stateProvider) {

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'src/menu-app/templates/home.template.html'
        }

        var categoriesState = {
            name: 'categories',
            url: '/categories',
            templateUrl: 'src/menu-app/templates/main-categories.template.html',
            controller: 'MainCategoriesController as $ctrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        }

        var itemsState = {
            name: 'categories.items',
            url: '/items/{categoryId}',
            templateUrl: 'src/menu-app/templates/main-items.template.html',
            controller: 'MainItemsController as $ctrl',
            resolve: {
                items: ['MenuDataService', 'categories', '$stateParams', function (MenuDataService, categories, $stateParams) {
                    return MenuDataService.getItemsForCategory(categories.data[$stateParams.categoryId].short_name)
                }]
            }
        }

        $urlRouterProvider.otherwise('/');

        $stateProvider.state(homeState);
        $stateProvider.state(categoriesState);
        $stateProvider.state(itemsState);
    }
})();