/**
 * Created by Morteza on 1/7/2017.
 */

var app = angular.module('mainApp', [
    'ui.router',
    'ngResource'
])
    .constant("BASE_API", "http://localhost:8080/")
    .factory('MenuResources', function ($resource, BASE_API) {
        return $resource(BASE_API + "menu");
    })

    .controller('MainCtrl', function ($scope, CoreService) {

        //select home page as a active menu
        $scope.selectedMenu = 0;

        $scope.selectMenu = function (index) {
            $scope.selectedMenu = index;
        }

        var service = CoreService;
        getMenus();
        function getMenus() {
            service.getMenus();
            service.menuPromise.$promise.then(function (response) {
                $scope.menus = response.data;
            }, function (err) {
                console.log(err.message);
            })
        }
    })
    .service('CoreService', function (MenuResources) {
        var self = {
            'menuPromise': null,
            'getMenus': function () {
                self.menuPromise = MenuResources.get({}, function () {

                })
            }
        }

        return self;
    })




