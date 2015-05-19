// the Service for the Employees

// A service responsible for CRUD operations on the Employees
(function() {

    'use strict';


    angular.module('daresay-app.data', []).service('EmployeesService', ['$q', '$http', function($q, $http) {

        // we could cache the data
        var _employees;

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
                    var employee = {};

                    angular.forEach(_employees.employees, function(value, key) {
                        if (Number(value.id) === Number(id)) {
                            employee = value;
                        }
                    });
                    deferred.resolve(employee);

                    return deferred.promise;
                } else {
                    // else- not in cache
                    deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;
            }
        };
    }
    ]);
})();

