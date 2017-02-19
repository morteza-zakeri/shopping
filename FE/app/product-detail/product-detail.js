"use strict";

app.factory('ProductDetailsResource', function (BASE_API, $resource) {
    return $resource(BASE_API + "product/:id");
})

app.controller('ProductDetailsCtrl', function ($scope, $stateParams, ProductDetailsService) {

    var service = ProductDetailsService;
    if ($stateParams) {
        var id = $stateParams.id;
        if (id > 0) {
            getProduct(id);
        }
    }

    function getProduct(id) {
        service.getProduct(id);
        service.productPromise.$promise.then(function (response) {
            $scope.product = response.data;
        })
    }

})
app.service('ProductDetailsService', function (ProductDetailsResource) {
    var self = {
        'productPromise': null,
        'getProduct': function (id) {
            var params = {
                'id': id
            }
            self.productPromise = ProductDetailsResource.get(params, function () {

            })
        }
    }
    return self;
})