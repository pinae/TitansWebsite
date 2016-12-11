'use strict';

var TitansApp = angular.module(
    "Titans",
    [
        "ngAnimate",
        "ngRoute",
        "localization",
        "BackendService"
    ]
).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/partials/index.html', controller: 'pageCtrl'}).
        when('/error/', {templateUrl: '/static/partials/error.html', controller: 'pageCtrl'}).
        otherwise({templateUrl: '/static/partials/index.html', controller: 'pageCtrl'});
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);

TitansApp.run(function ($rootScope, $window, $document, localize) {
    // root scope functions
    $rootScope.getLanguages = function () {
        return localize.getLanguageList();
    };
    $rootScope.$watch('language', function (newLang) {
        if (localize.language != newLang) {
            localize.setLanguage(newLang);
            $rootScope.$broadcast('langChange', newLang);
        }
    });
    // initialization
    if (!$rootScope.language) {
        var lang = $window.navigator.userLanguage ||
                   $window.navigator.language ||
                   $document.getElementsByTagName('html')[0].lang;
        if (lang && (lang.length > 2)) {
            lang = lang.substr(0, 2);
        }
        $rootScope.language = lang;
    }
});