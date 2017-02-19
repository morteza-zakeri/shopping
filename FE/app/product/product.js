/**
 * Created by Morteza on 1/7/2017.
 */

app.factory('GroupFactory', function (BASE_API, $resource) {
    return $resource(BASE_API + "group");
})
app.factory('CategoryFactory', function (BASE_API, $resource) {
    return $resource(BASE_API + "category");
})

app.controller('ProductCtrl', function ($scope,ProductService) {

    $scope.showCaption=false;
    $scope.updateCaption=function(flag){
        $scope.showCaption = flag;
    }



    var service = ProductService;
    
    getGroups();
    function getGroups(){
        // service.getGroup();
        // service.groupPromise.$promise.then(function(response){
        //     if(response.code==201){
        //         $scope.groups = response.data;
        //         console.log($scope.groups);
        //     }
        // })
        $scope.groups = [
                {"id":1,"name":"گروه یک","icon":"kala5.jpg"},
                {"id":2,"name":"گروه یک","icon":"kala5.jpg"},
                {"id":3,"name":"گروه یک","icon":"kala5.jpg"},
                {"id":4,"name":"گروه یک","icon":"kala5.jpg"},
                {"id":5,"name":"گروه یک","icon":"kala5.jpg"},
                {"id":6,"name":"گروه دو","icon":"kala6.jpg"}
        ]
    }
    $scope.getCategory = function(group){
        console.log("OK");
        if(group){
            var id = group.id;
            service.getCategory(id);
            service.categoryPromise.$promise.then(function(response){
                    if(response.code==201){
                        $scope.categories = response.data;
                    }
            })
        }
    }
    getCategories();
    function getCategories(){
        $scope.categories=[
            {"id":1,"name":"دسته یک","icon":"kala6.jpg","group_id":1},
            {"id":2,"name":"دسته دو","icon":"kala7.jpg","group_id":2},
            {"id":3,"name":"دسته سه","icon":"kala8.jpg","group_id":1},
            {"id":4,"name":"دسته چهار","icon":"kala9.jpg","group_id":2},
            {"id":5,"name":"دسته یک","icon":"kala6.jpg","group_id":2},
            {"id":6,"name":"دسته دو","icon":"kala7.jpg","group_id":2},
            {"id":7,"name":"دسته سه","icon":"kala8.jpg","group_id":1},
            {"id":8,"name":"دسته چهار","icon":"kala9.jpg","group_id":2},
            {"id":9,"name":"دسته یک","icon":"kala6.jpg","group_id":2},
            {"id":10,"name":"دسته چهار","icon":"kala9.jpg","group_id":1}
        ]
    }
    getProducts();
    function getProducts(){
        $scope.products=[
            {"name":"کالای یک","description":"توخیحات کالای 1","price":"1000","icon":"kala1.jpg","offer":true,"offer_price":800,"category_id":1},
            {"name":"کالای دو","description":"توخیحات کالای 2","price":"1500","icon":"kala2.jpg","offer":true,"category_id":2},
            {"name":"کالای سه","description":"توخیحات کالای 3","price":"5000","icon":"kala3.jpg","offer":false,"category_id":2},
            {"name":"کالای چهار","description":"توخیحات کالای 4","price":"57000","icon":"kala4.jpg","offer":true,"category_id":1},
        ];
    }
    
    

    $scope.selectGroup = function(group){
        getCategories();
        var categories = [];
        selectToGroup(group);
       
        $scope.selectedGroup = group;
        angular.forEach($scope.categories , function(category) {
            if(category.group_id==group.id){
              
                categories.push(category);
            }
        })
        $scope.categories = categories;  
    }

    function selectToGroup(group){
        $scope.topGroup = group;
    }



    $scope.selectCategory = function(category){
       
        $scope.selectedCategory = category;
        angular.forEach($scope.products , function(product) {
            if(product.category_id==category.id){
              
                products.push(product);
            }
        })
        $scope.products = products;
        
    }

});

app.service('ProductService', function (GroupFactory, CategoryFactory) {
    var self = {
        'groupPromise': null,
        'categoryPromise':null,

        'getGroup': function () {
            self.groupPromise = GroupFactory.get({}, function () {
                
            })
        },
        'getCategory': function(id){
            var params = {
                id:id
            }
            self.categoryPromise = CategoryFactory.get(params, function(){

            })
        }
    }

    return self;
});


app.component('cardProduct',{
    templateUrl: 'app/directives/card-product.html',
    transclude: true,
    controller: function() {
    
    this.message = "Hello Component";
    this.products=[
            {"name":"کالای یک","description":"توخیحات کالای 1","price":"1000","icon":"kala1.jpg","offer":true,"offer_price":800,"category_id":1},
            {"name":"کالای دو","description":"توخیحات کالای 2","price":"1500","icon":"kala2.jpg","offer":true,"category_id":2},
            {"name":"کالای سه","description":"توخیحات کالای 3","price":"5000","icon":"kala3.jpg","offer":false,"category_id":2},
            {"name":"کالای چهار","description":"توخیحات کالای 4","price":"57000","icon":"kala4.jpg","offer":true,"category_id":1},
        ];

  },
})