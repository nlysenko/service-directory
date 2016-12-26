ServiceDirectoryModule.controller('logInNowCtrl', ['$scope', function($scope) {
    $scope.dentist = {
        type: '',
        other: '',
        name: '',
        email: '',
        subject: '',
        description: '',
        img: ''
    };

    $scope.showDentizForm = function () {
        $scope.dintistFormIsVisible = true;
    };

    $scope.types = ['Other', 'Dentist'];

    $scope.dintistFormIsVisible = false;
    $scope.textButtonIsVisible = true;

    $scope.imageUpload = function(event) {
        var files, reader, i;

        for (i = 0, files = event.target.files; i < files.length; i++) {
            reader = new FileReader();
            reader.onload = function(e) {
                $scope.$apply(function() {
                    $scope.dentist.img = e.target.result;
                    $scope.textButtonIsVisible = false;
                });
            };
            reader.readAsDataURL(files[i]);
        };
    };

    $scope.logInNow = function () {
        console.log($scope.dentist);
        $scope.dintistFormIsVisible = false;
    };
}]);
