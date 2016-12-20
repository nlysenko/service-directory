ServiceDirectoryModule.controller('serviceDirectoryCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.services = [];
    $scope.error = {};

    $http.get("ajax/get-services")
        .then(function(response) {
            $scope.services = response.data
        })
        .catch(function(response) {
            if (response.status === 401) {
                $scope.error.status = response.status;
                $scope.error.description = response.data.error.description;
                document.location.href = "http://localhost:3000/#openModal";
            } else if (response.status === 500) {
                $scope.error.status = response.status;
                $scope.error.description = response.data.error.description;
                document.location.href = "http://localhost:3000/#openModal";
            }
        });
}]);
