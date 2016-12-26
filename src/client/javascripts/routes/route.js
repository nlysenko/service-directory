ServiceDirectoryModule.config( ['$routeProvider', '$locationProvider', '$httpProvider',

    function($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        $routeProvider
            .when('/', {
                templateUrl: 'ajax/home/',
                controller: 'logInNowCtrl'
            })
            .when('/service-directory', {
                templateUrl: 'ajax/service-directory/'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
}]);
