ServiceDirectoryModule.controller('serviceDirectoryCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.services = [];
    $scope.error = {};

    $http.get(
            "http://504080.com/api/v1/services/categories",
            {
                headers: {
                    'Authorization': '5f2fd62aa9f2d43beaefde9fd42b401febec6d56'
                }
            }
        )
        .then(function(response) {
            $scope.services = response.data.data
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
