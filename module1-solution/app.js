(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    // prevents TypeError in calcNumberOfDishes because dishes can otherwise be undefined
    $scope.dishes = '';

    $scope.check = function () {
        var numberOfDishes = calcNumberOfDishes($scope.dishes);

        updateMessage(numberOfDishes);

        //bonus
        updateColor(numberOfDishes);
    }

    function calcNumberOfDishes (dishes) {
        return dishes === '' ? 0 : dishes.split(',').length;
    }

    function updateMessage(numberOfDishes) {
        if (numberOfDishes === 0) {
            $scope.message = 'Please enter data first';
        } else if (numberOfDishes <= 3) {
            $scope.message = 'Enjoy!';
        } else {
            $scope.message = 'Too much!';
        }
    }

    function updateColor(numberOfDishes) {
        $scope.color = numberOfDishes === 0 ? 'red' : 'green';
    }

}})();