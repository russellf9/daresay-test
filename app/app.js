angular.module('daresay-app', ['ui.router', 'daresay-app.data', 'daresay-app.employees' ])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html'
            });

    }]);