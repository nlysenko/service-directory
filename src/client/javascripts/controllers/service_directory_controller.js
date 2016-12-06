ServiceDirectoryModule.controller('serviceDirectoryCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.services = [];

    var req = {
        method: "GET",
        url: "http://504080.com/api/v1/services/categories",
        headers: {
            'Authorization': '5f2fd62aa9f2d43beaefde9fd42b401febec6d56'
        }
    };

    $http(req)
        .success(function(obj) {
            if (obj.success === true) {
                $scope.services = obj.data;
            };
        })
        .error(function(data, status) {
            console.log('Error!');
        });
}]);
