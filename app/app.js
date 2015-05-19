angular.module('daresay-app', ['ui.router', 'daresay-app.data', 'daresay-app.employees',
    'daresay-app.employee', 'daresay-app.employeedirective' ])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html'

            }).
            state('employee', {
                url: '/employee:id',
                templateUrl: 'components/employee/employee-holder.html',
                controller: 'EmployeeController'
            });

    }]);