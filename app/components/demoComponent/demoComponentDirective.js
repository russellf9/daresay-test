angular.module('daresay-app')

.directive('demoComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/demoComponent/demoComponent.html'
        };
    }]);