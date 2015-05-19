(function() {
    angular.module('daresay-app.employeedirective', [])
        .directive('employee', Employee);

    /**
     * The <Employee> directive is responsible for:
     * - displaying the Employee
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Employee(EmployeesService) {

        return {
            restrict: 'EA',
            scope: {
                update: '&',
                id: '='
            },
            templateUrl: 'components/employee/employee.html',
            link: function(scope, $state) {
                // the function get the set of all qualifications
                EmployeesService.getEmployee(scope.id).then(function(result) {
                    scope.employee = result;
                }, function(error) {
                    console.log('error: ',error);
                });

            }
        };
    }

})();
