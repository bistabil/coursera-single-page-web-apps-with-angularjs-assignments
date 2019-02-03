(function () {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    function UserService() {
      var service = this;
      service.user = undefined;
    
      service.signupUser = function (user) {
        service.user = user;
      };

      service.getUserInfo = function () {
        return service.user;
      };
    
    }
})();