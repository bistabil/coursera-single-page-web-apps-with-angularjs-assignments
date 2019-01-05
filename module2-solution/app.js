(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService) {

    var toBuyController = this;

    toBuyController.items = ShoppingListCheckOffService.getToBuyList();

    toBuyController.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
    }
}

function AlreadyBoughtController (ShoppingListCheckOffService) {

    var alreadyBoughtController = this;

    alreadyBoughtController.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService () {

    var service = this;

    var toBuyList = [
        { name: 'Mithril Ore', quantity: 5 },
        { name: 'Iron Ore', quantity: 5 },
        { name: 'Thread', quantity: 10 },
        { name: 'Coal', quantity: 9 },
        { name: 'Charcoal', quantity: 9 },
        { name: 'Oriharukon Ore', quantity: 3 }
    ];
    var boughtList = [];

    service.buyItem = function (index) {

        var boughtItem = toBuyList[index];

        toBuyList.splice(index, 1);

        boughtList.push(boughtItem);
    }

    service.getToBuyList = function () {

        return toBuyList;
    }

    service.getBoughtList = function () {

        return boughtList;
    }
}
})();