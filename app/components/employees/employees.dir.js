(function() {
    angular.module('daresay-app.employees', [])
        .directive('employees', Employees);

    /**
     * The <Employees> directive is responsible for:
     * - displaying the Employees
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Employees(EmployeesService) {

        return {
            restrict: 'EA',
            scope: {
                update: '&'
            },
            templateUrl: 'components/employees/employees.html',
            link: function(scope) {

                console.log('employees!');

                // the function get the set of all qualifications
                EmployeesService.getEmployees().then(function(result) {
                    console.log('A EmployeesService ---- results: ',result);
                    scope.employees = result;
                }, function(error) {
                    console.log('error: ',error);
                });

            }
        };
    }

})();
