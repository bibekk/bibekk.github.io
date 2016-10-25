var app = angular.module("Alpha", []);

app.controller('AlphaController', function ($scope) {
    $scope.output = '';
    $scope.data = {
        'A': 'Alpha',
        'B': 'Bravo',
        'C': 'Charlie',
        'D': 'Delta',
        'E': 'Echo',
        'F': 'Fox',
        'G': 'Golf',
        'H': 'Hotel',
        'I': 'India',
        'J': 'Juliet',
        'K': 'Kilo',
        'L': 'Lima',
        'M': 'Mike',
        'N': 'November',
        'O': 'Oscar',
        'P': 'Private',
        'Q': 'Queen',
        'R': 'Romeo',
        'S': 'Sierra',
        'T': 'Tango',
        'U': 'Uniform',
        'V': 'Victor',
        'W': 'Whiskey',
        'X': 'X-ray',
        'Y': 'Yankee',
        'Z': 'Zero'
    };

    $scope.populate = function () {
        $scope.output = '';
        if (!$scope.reverse) {
            angular.forEach($scope.input, function (value, key) {
                $scope.getValue(value);
            })
        } else {
            var a = $scope.input.split('___');
            $.each(a, function (key, val) {
                var t = val.split('.');
                $.each(t, function (key, val) {
                    $scope.output += val.substring(0, 1).toLowerCase();
                });
                $scope.output += " ";
            });
        }
    };



    $scope.getValue = function (letter) {
        angular.forEach($scope.data, function (value, key) {
            if (letter.toUpperCase() === key) {
                $scope.output += value + '.';
            }
        });

        if (letter === ' ') {
            $scope.output += '___';
        }
    };

});