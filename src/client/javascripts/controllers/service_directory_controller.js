ServiceDirectoryModule.controller('serviceDirectoryCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.services = [];
    $scope.error = {};

    var req = {
        method: "GET",
        url: "http://504080.com/api/v1/services/categories",
        headers: {
            'Authorization': '5f2fd62aa9f2d43beaefde9fd42b401febec6d56'
        }
    };

    $http(req)
        .success(function(data) {
            if (data.success === true) {
                $scope.services = data.data;
            }
        })
        .error(function(data, status) {
            if (status === 401) {
                $scope.error.status = status;
                $scope.error.description = data.error.description;
                document.location.href = "http://localhost:3000/#openModal";
            } else if (status === 500) {
                $scope.error.status = status;
                $scope.error.description = data.error.description;
                document.location.href = "http://localhost:3000/#openModal";
            }
        });
}]);
