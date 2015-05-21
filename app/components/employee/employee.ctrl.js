(function () {

    angular.module('daresay-app.employee',[])
        .controller('EmployeeController', Employee);


    function Employee($scope, $state, $stateParams) {

        console.log('Employee Ctrl!');

        $scope.state = $state.current;
        $scope.params = $stateParams;

        // pass the id to the directive
        $scope.id = $scope.params.id || 1001;


        console.log('Employee Ctrl! | params: ', $scope.params);
        console.log('Employee Ctrl! | id: ', $scope.id);

        // the notification that the data has been got
        $scope.onReceived = function() {
            console.log('onReceived!');
        };


    }

})();
