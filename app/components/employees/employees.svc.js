// the Service for the Accounts

// A service responsible for CRUD operations on the Account
(function() {

    'use strict';


    angular.module('daresay-app.data', []).service('EmployeesService', ['$q', '$http', function($q, $http) {


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

