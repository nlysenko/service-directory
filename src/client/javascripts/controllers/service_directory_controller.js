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
        .success(function(response) {
            if (response.success) {
                $scope.services = response.data;
            }
        })
        .error(function(response, status) {
            if (status === 401) {
                $scope.error.status = status;
                $scope.error.description = response.error.description;
                document.location.href = "http://localhost:3000/#openModal";
            } else if (status === 500) {
                $scope.error.status = status;
                $scope.error.description = response.error.description;
                document.location.href = "http://localhost:3000/#openModal";
            }
        });
}]);
