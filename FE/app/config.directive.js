/**
 * Created by Morteza on 1/15/2017.
 */
app.directive('entry', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/entry.html',
    }
})

app.directive('show', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/show.html'
    }
})

app.directive('groupBox', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/group-box.html',
    }
})

app.directive('cardCategory', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/card-category.html'
    }
})

app.directive('fltrBtns', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/fltr-btns.html'
    }
})

app.directive('introductionProduct', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/introduction-product.html'
    }
})

app.directive('materialProduct', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/material-product.html'
    }
})

app.directive('licenseProduct', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directives/license-product.html'
    }
})

app.directive('customFooter', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/directives/custom.footer.html'
    }
})
