ServiceDirectoryModule.controller('getUserCtrl', ['$scope', function($scope) {
    $scope.users = [
        {
            name: 'Maximillian Beekeeper',
            photo: '/static/images/user.png'
        }
    ];

    $scope.getUser = $scope.users[0];
}]);
