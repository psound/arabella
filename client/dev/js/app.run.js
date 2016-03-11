/* globals angular */
;(function(angular) {
//    "use strict";

    angular
        .module('distractology')
        .run(function($rootScope) {
            $rootScope.testSubmit = function () {
                alert("You clicked submit.");
            };
        });

}(window.angular));
