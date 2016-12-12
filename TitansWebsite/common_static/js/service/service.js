'use strict';

angular.module('BackendService', [])
    .factory('Backend', function ($http) {
        return {
            getPage: function (path) {
                return $http({
                    method: "GET",
                    url: '.page/get_page/' + path.replace(/^\/+/g, ''),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            }
        }
});