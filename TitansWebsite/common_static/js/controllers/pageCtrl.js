'use strict';

TitansApp.controller("pageCtrl", function ($scope, $routeParams, $location, Backend) {
    $scope.loading = true;
    $scope.text = "Loading page: " + $location.path();
    Backend.getPage($location.path()).then(function (response) {
        console.log(response.data);
        //$scope.text = markdown.toHTML(response.data.text);
        $scope.text = response.data.text;
    }, function (errorResponse) {
        $scope.text = errorResponse.data.error;
        if (errorResponse.status == 401) {
            $scope.text += "<br />You may log in to create this page.";
        }
    })
});