/* globals angular */
;(function(angular) {
    //"use strict";

    angular
        .module('distractology')
        .config(function($rootScope, $state) {
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
                // redirectTo
                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams);
                }
            });
        });

        function stateConfig($rootScope, $state) {
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
                // redirectTo
                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams);
                }
            });
        }

}(window.angular));
