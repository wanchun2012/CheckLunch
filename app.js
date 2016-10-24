(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.content = '';
    $scope.analyseLunch = function () {
      var rgx1 = /,[ |,]+/g;
      var rgx2 = /,$/g;
      var content = $scope.content.replace(rgx1, ',').replace(rgx2, '');
      console.log(content);
      if (content === '') {
        $scope.color = 'red';
        $scope.message = 'Please enter data first';
      } else {
        $scope.color = 'green';
        var array = content.split(',');
        console.log(array);
        if (array.length > 3) {
          $scope.message = 'Too much!';
        } else {
          $scope.message = 'Enjoy!';
        }
      }
    };
  }
})();
