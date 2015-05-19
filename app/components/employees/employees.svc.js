// the Service for the Accounts

// A service responsible for CRUD operations on the Account
(function() {

    'use strict';


    angular.module('daresay-app.data', []).service('EmployeesService', ['$q', function($q) {


        var  _employees;

        return {


            getEmployees: function() {

                _employees = {};

                console.log('\n----\nEmployeesService::getEmployees | _employees: ', _employees, '\n----\n');

                // if the initial value is null reset to the default
                if (! _employees) {
                    console.log('no  _employees!');
                }
                // There will always be a promise so always declare it.
                var deferred = $q.defer();

                // Resolve the deferred $q object before returning the promise
                deferred.resolve(_employees);

                return deferred.promise;

            }
        };
    }
    ]);
})();

