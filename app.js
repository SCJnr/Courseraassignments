(function() {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.checkDishes = function() {
      var num = countDishes($scope.dishes);
      $scope.message = messageout(num);
    };
    function countDishes(dishes) {
      var t = 0;
      if (dishes) {
        var array = dishes.split(",");
        for (var index in array) {
          if (array[index].trim().length != 0) {
            t++;
          }
        }
      }
      return t;
    }
    function messageout(x) {
      if (x === 0) {
        return "No input provided";
      } else if (x <= 3) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    }
  }
})();
