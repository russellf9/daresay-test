angular.module('daresay-app', ['ui.router', 'daresay-app.data', 'daresay-app.navigation',
    'daresay-app.employee', 'daresay-app.employeedirective', 'daresay-app.navigator' ])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html',
                controller: 'EmployeeController'

            }).
            state('employee', {
                url: '/employee:id',
                templateUrl: 'components/home.html',
                controller: 'EmployeeController'
            });

        $urlRouterProvider.otherwise('/');

    }]);