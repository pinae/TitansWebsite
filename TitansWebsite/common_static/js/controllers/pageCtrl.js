'use strict';

TitansApp.controller("pageCtrl", function ($scope, $routeParams, $location, Backend) {
    $scope.loading = true;
    $scope.text = "Loading page: " + $location.path();
    Backend.getPage($location.path()).then(function (response) {
        console.log(response.data);
        //$scope.text = markdown.toHTML(response.data.text);
        $scope.text = response.data.text;
    }, function (errorMessage) {
        console.log(errorMessage);
    })
});