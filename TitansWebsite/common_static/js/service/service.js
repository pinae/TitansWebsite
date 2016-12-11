'use strict';

angular.module('BackendService', [])
    .factory('Backend', function ($http) {
        return {
            loadText: function (id, resultData) {
                return $http({
                    method: "POST",
                    url: '/loadText',
                    data: 'id=' + id + '&result_data=' + angular.toJson(resultData),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            }
        }
});