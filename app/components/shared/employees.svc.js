// the Service for the Employees

// A service responsible for CRUD operations on the Employees
(function() {

    'use strict';


    angular.module('daresay-app.data', []).service('EmployeesService', ['$q', '$http', function($q, $http) {

        // we could cache the data
        var _employees;

        // an inefficient utility which finds employee of the given `id`
        var _findEmployee = function(id) {
            var employee = {};

            angular.forEach(_employees.employees, function(value, key) {
                if (Number(value.id) === Number(id)) {
                    employee = value;
                }
            });
            return employee;
        };

        return {

            getEmployees: function() {
                return $http.get('data.json').then(function(result) {
                    _employees = result.data;
                    return result.data;
                });
            },

            getEmployee: function(id) {

                var deferred = $q.defer();

                if (_employees) {
                    // TODO handle error here...
                    deferred.resolve(_findEmployee(id));

                    return deferred.promise;
                } else {

                    this.getEmployees().then(function(result) {
                        _employees.employees = result.employees;
                        deferred.resolve(findEmployee(id));
                    }, function(error) {
                        deferred.reject("Error: no data as yet ", error);
                    });
                }

                return deferred.promise;
            },

            // searches through the `worked_with` data of the current employee for a match
            isMember: function(employeeId, activeId) {
                if(Number(employeeId) === Number(activeId)) {
                    return false;
                }
                var employee = _findEmployee(activeId);
                return employee.worked_with.indexOf(employeeId) >= 0;
            }
        };
    }
    ]);
})();

