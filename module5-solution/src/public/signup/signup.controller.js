(function(){
    'use strict';

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'UserService'];

    function SignupController(MenuService, UserService) {
        var $ctrl = this;

        $ctrl.signup = function () {
            $ctrl.signed = false;
            MenuService.getMenuItem($ctrl.user.favouriteDishNumber).then(function(dishDetails) {
                if (!dishDetails.error) {
                    $ctrl.user.favouriteDish = dishDetails;
                    UserService.signupUser($ctrl.user);
                    $ctrl.favouriteDishNotFound = false;
                    $ctrl.signed = true;
                } else {
                    $ctrl.favouriteDishNotFound = true;
                }
            });
        }
    }
})();