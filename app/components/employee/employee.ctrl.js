(function () {

    angular.module('daresay-app.employee',[])
        .controller('EmployeeController', Employee);


    function Employee($scope, $state, $stateParams) {

        console.log('Employee Ctrl!');

        $scope.state = $state.current;
        $scope.params = $stateParams;

        // pass the id to the directive
        $scope.id = $scope.params.id;


        console.log('Employee Ctrl! | params: ', $scope.params);

        // the notification that the data has been got
        $scope.onReceived = function() {
            console.log('onReceived!');
        };


    }

})();
