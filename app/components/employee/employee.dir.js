(function() {
    angular.module('daresay-app.employeedirective', [])
        .directive('employee', Employee);

    /**
     * The <Employee> directive is responsible for:
     * - displaying the Employee
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function _resolveTemplate(NavigatorService, tElement, tAttrs) {

        var isMobile = NavigatorService.isMobile(); // using the chrome mobile switch for testing

        if(isMobile) {
            return 'components/employee/employee-mobile.html'
        } else {
            return 'components/employee/employee.html'
        }
    }

    function Employee(EmployeesService, NavigatorService) {

        return {
            restrict: 'EA',
            scope: {
                update: '&',
                id: '='
            },
            templateUrl: _resolveTemplate(NavigatorService),
            link: function(scope) {
                // the function get the set of all qualifications
                EmployeesService.getEmployee(scope.id).then(function(result) {
                    scope.employee = result;
                }, function(error) {
                    console.log('Employee::link - error: ',error);
                });

                scope.hasValue = function() {
                    return !angular.equals({},scope.employee);
                }
            }
        };
    }

})();
