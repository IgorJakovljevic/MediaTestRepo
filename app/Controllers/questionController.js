app.controller('questionCtrl', function($scope, $http) {
    /**BEGIN Logic */
    $scope.getData = function() {
        $http({
            method: 'GET',
            url: 'app/Data/question.json'
        }).then(function(response) {
            $scope.questions = response.data.questions;
        });
    };

    $scope.openQuestion = function(id) {
        $scope.question = $scope.questions[id];
        $scope.currentView = 'app/Views/question.html';
    }

    $scope.openHome = function() {
        $scope.currentView = 'app/Views/main.html';
    }
    
    $scope.openSearch = function () {
        $scope.currentView = 'app/Views/search.html';
    }

    /**END Logic */
    $scope.currentView = 'app/Views/main.html';
    /*BEGIN Init*/
    $scope.questions = {};
    $scope.getData();
    /*END Init*/
});