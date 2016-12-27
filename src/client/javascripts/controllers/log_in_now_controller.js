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
                var img = document.createElement('img');

                img.onload = function () {
                    var width = this.width,
                        height = this.height;

                    if (e.loaded <= 5000000 && width > 300 && height > 300) {
                        $scope.$apply(function() {
                            $scope.dentist.img = e.target.result;
                            $scope.textButtonIsVisible = false;
                        });
                    } else {
                        alert('Select the correct photo!');
                    }
                };

                img.src = e.target.result;
            };
            reader.readAsDataURL(files[i]);
        };
    };

    $scope.logInNow = function () {
        console.log($scope.dentist);
        $scope.dintistFormIsVisible = false;
    };
}]);
