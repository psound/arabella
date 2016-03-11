;(function(angular) {
  "use strict";

  angular
    .module('distractology.common')
    .directive('forgotCode', function ($location, $anchorScroll, $http) {
        return function(scope, element, attrs) {
            element.bind('click', function(event) {
                console.log('here - service');
            });
        }
    });
}(window.angular));
