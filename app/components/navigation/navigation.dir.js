(function() {
    angular.module('daresay-app.navigation', [])
        .directive('navigation', Navigation);

    /**
     * The <Navigation> directive is responsible for:
     * - displaying the Navigation
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Navigation(EmployeesService) {

        return {
            restrict: 'EA',
            scope: {
                update: '&'
            },
            templateUrl: 'components/navigation/navigation.html',
            link: function(scope, $state) {

                // the function get the set of all qualifications
                EmployeesService.getEmployees().then(function(result) {
                    scope.employees = result.employees;
                }, function(error) {
                    console.log('error: ',error);
                });

                // @id the id of the employee page to open
                // TODO
                scope.open = function(id) {
                    //$state.go('employee', {id:id});
                }

            }
        };
    }

})();
