// the Service for the Employees

// A service responsible for CRUD operations on the Employees
(function() {

    'use strict';


    angular.module('daresay-app.data', []).service('EmployeesService', ['$q', '$http', function($q, $http) {

        // we could cache the data
        var  _employees;

        return {

            getEmployees: function() {
                return $http.get('data.json').then(function(result) {
                    return result.data;
                });
            }
        };
    }
    ]);
})();

