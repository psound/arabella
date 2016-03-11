;(function(angular) {
  "use strict";

	angular
		.module('distractology.common')
        .factory("sharedDataEventHub", sharedDataEventHub)
        .factory("progressBarService", progressBarService)
        .factory("forgotCode", forgotCode);

        sharedDataEventHub.$inject = ["$rootScope"];

        function sharedDataEventHub($rootScope) {
            var DATA_CHANGE = "DATA_CHANGE_EVENT";
            var service = {
                changeData: changeData,
                onChangeData: onChangeData
            };
            return service;

            function changeData(obj) {
                $rootScope.$broadcast(DATA_CHANGE, obj);
            }

            function onChangeData($scope, handler) {
                $scope.$on(DATA_CHANGE, function(event, obj) {
                    handler(obj);
                });
            }


        }

        function progressBarService() {
            return { value: 0 };
        }

        function forgotCode() {
            console.log('dos tres');
        }

        function objVideoService() {
            console.log('here-video');
        }

}(window.angular));
