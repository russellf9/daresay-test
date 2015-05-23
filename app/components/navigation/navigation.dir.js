(function() {
    angular.module('daresay-app.navigation', [])
        .directive('navigation', Navigation);

    /**
     * The <Navigation> directive is responsible for:
     * - displaying the Navigation
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function _resolveTemplate(service, tElement, tAttrs) {

        var isMobile = service.isMobile(); // using the chrome mobile switch for testing

          console.log('B Nav::isMobile: ', isMobile);
        if(isMobile) {
            return 'components/navigation/navigation-mobile.html'
        } else {
            return 'components/navigation/navigation.html'
        }
    }

    function Navigation(EmployeesService, NavigatorService) {

        return {
            restrict: 'EA',
            scope: {
                update: '&',
                id: '='
            },
            templateUrl: _resolveTemplate(NavigatorService),
            link: function(scope) {

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
                };

                // returns true if the supplied `id` matches the current id of the current active employee
                scope.isActive = function(id) {
                    return Number(scope.id) === Number(id);
                };

                // returns true if the employee with the supplied `id` has worked with the current active employee
                scope.isMember= function(id) {
                    return EmployeesService.isMember(id, scope.id);
                }

            }
        };
    }

})();
