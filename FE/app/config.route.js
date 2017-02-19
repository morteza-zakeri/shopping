/**
 * Created by Morteza on 1/15/2017.
 */
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Home");
    //
    // Now set up the states
    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: "app/app.html",

        })
        .state('app.home', {
            url: "/Home",
            templateUrl: "app/home/home.html"
        })
        .state('app.product', {
            url: "/Product",
            templateUrl: "app/product/product.html",
            controller: 'ProductCtrl'
        })
        .state('app.product-detail', {
            url: "/Product-detail/:id",
            templateUrl: "app/product-detail/product-detail.html",
            controller:'ProductDetailsCtrl'
        })
        .state('app.contact', {
            url: "/Contact",
            templateUrl: "app/contact/contact.html"
        })
        .state('app.useracount', {
            url: "/Useracount",
            templateUrl: "app/useracount/useracount.html"
        })
        .state('app.register', {
            url: "/register",
            templateUrl: "app/register/register.html"
        })
        .state('app.basket', {
            url: "/basket",
            templateUrl: "app/basket/basket.html"
        })
        .state('app.terms', {
            url: "/terms",
            templateUrl: "app/terms/terms.html"
        })

})
