ServiceDirectoryModule.controller('getUserCtrl', ['$scope', function($scope) {
    $scope.users = [
        {
            name: 'Maximillian Beekeeper',
            photo: '/static/images/user.png'
        },
        {
            name: 'Other User',
            photo: '/static/images/user-test.png'
        }
    ];

    $scope.getUser = $scope.users[0];
}]);
