'use strict';

TitansApp.controller("pageCtrl", function ($scope, $routeParams, $location) {
    $scope.url = "dummy";
    console.log("Location: " + $location.path());
});