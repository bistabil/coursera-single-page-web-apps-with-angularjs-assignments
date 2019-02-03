(function () {
    'use strict';

    angular.module('public')
    .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['userInfo', 'ApiPath'];

    function UserInfoController (userInfo, ApiPath) {
        var $ctrl = this;
        $ctrl.userInfo = userInfo;
        $ctrl.basePath = ApiPath;
    }
})();