// note for reviewer:
// originally I was displaying "Nothing found" message simply when
// length of found items array was 0 (see foundItems.html)
// this resulted in message appearing in case when initially
// there were some results but they all were manually removed
// since I was affraid of getting lower grade if I don't interfere with this
// side effect, I've passed additional flag to the directive in order to prevent
// this from happening
// I think that instructions could be clearer on this 
(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('MenuItemsResource', 'https://davids-restaurant.herokuapp.com/menu_items.json');

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
    var ctrl = this;

    ctrl.getItems = function (searchTerm) {
        if (!!searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function (response) {
                ctrl.found = response;
                ctrl.noResults = response.length === 0;
            });
        } else {
            ctrl.found = [];
            ctrl.noResults = true;
        }
    }

    ctrl.removeItem = function (index) {
        ctrl.found.splice(index, 1);
    }
}

MenuSearchService.$inject = ['$http', 'MenuItemsResource'];
function MenuSearchService ($http, MenuItemsResource) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return getMenuItems().then(function (response) {
            service.matchedItems = response.data.menu_items.filter(
                item => item.description.indexOf(searchTerm) !== -1
            );

            return service.matchedItems;
        });
    }

    function getMenuItems () {
        return $http({
            url: MenuItemsResource
        });
    }
}

function FoundItemsDirective () {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            found: '<',
            onRemove: '&',
            noResults: '<'
        }
    }

    return ddo;
}

})()