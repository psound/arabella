var ready = (function(ready) {  
  var ie = function() {
    return (!document.attachEvent || typeof document.attachEvent === "undefined" ? false : true);
  }
  
  ready = function(callback) {
    if(callback && typeof callback === 'function'){
      if(ie()) {
        document.attachEvent("onreadystatechange", function() {
          if(document.readyState === "complete") {
            return callback();
          }
        });
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          return callback();
        });
      }
    } else {
      console.error('The callback is not valid');
    }
  }
  
  return ready;
})(ready || {});


(function(document, window, ready, undefined) {
    ready(function() {
        console.log('DOM Is Ready...');
        $(document).on("click",".navbar-toggle,.inner .navbar .nav a, .navbar .nav.main a",function(){
          $(".app").toggleClass("off-canvas");
        })
    });
})(document, window, ready);

/**
 * @ngdoc overview
 * @name angular-step
 *
 * @description
 * An AngularJS way of building clean "wizard" like applications.
 */
angular 
    .module('distractology.common', [])
    .controller('StepSetController', ['$scope', function ($scope) {

    var ctrl = this,
        index = -1, // points to the current step in the steps array
        steps = ctrl.steps = $scope.steps = [];

    $scope.nextEnabled = true;
    $scope.previousEnabled = false;
    $scope.submitEnabled = false;

    /*
     * Moves to the next step
     */
    $scope.next = function () {
        if (steps.length === 0) {
            console.debug('No steps provided.');
            return;
        }
        
        // If we're at the last step, then stay there.
        if (index == steps.length - 1) {
            console.debug('At last step.');
            return;
        }

        steps[index++].isDisplayed = false;
        steps[index].isDisplayed = true;

        ctrl.setButtons();
    }; 
    // $scope.next

    /*
     * Moves to the previous step
     */
    $scope.previous = function () {
        if (steps.length === 0) {
            console.debug('No steps provided.');
            return;
        }

        if (index === 0) {
            console.debug('At first step');
            return;
        }
        steps[index--].isDisplayed = false;
        steps[index].isDisplayed = true;
        ctrl.setButtons();
    }; 
    // $scope.previous

    $scope.submit = function () {
        $scope.submitAction();
    };

    /*
     * Adds a step to the end of the step list and
     * sets the index to 0 if it's the first step added.
     */
    ctrl.addStep = function (obj) {
        ctrl.steps.push(obj);
        if (index == -1) {
            index = 0;
            steps[0].isDisplayed = true;
        }
    };

    /*
     * Sets the correct buttons to be enabled or disabled.
     */
    ctrl.setButtons = function () {
        if (index == steps.length - 1) {
            $scope.nextEnabled = false;
            $scope.submitEnabled = true;
        } else if (index === 0) {
            $scope.previousEnabled = false;
        } else {
            $scope.nextEnabled = true;
            $scope.previousEnabled = true;
            $scope.submitEnabled = false;
        }
    };

}])


/**
 * @ngdoc directive
 * @name stepset
 * @restrict EA TODO: This may or may not be correct.
 *
 * @description
 * Stepset is the outer container for a set of ordered steps.
 * @example
 * TODO: Put example here.
 */
.directive('stepset', function() {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            nextText: '@',
            previousText: '@',
            submitText: '@',
            submitAction: '=',
            showProgressBar: '='
        },
        controller: 'StepSetController',
        templateUrl: 'partials/stepset.html',
        link: function(scope, element, attrs) {
            // TODO put link related things here.
        }
    };
})


/**
 * @ngdoc directive
 * @name step
 * @restrict EA TODO: this may or may not be correct
 *
 * @description
 * A Step is a single item that is displayed in the step set.
 * @example
 * TODO: put example here.
 */
.directive('step', ['$parse', function($parse) {
    var d = this;
    return {
        require: '^stepset',
        restrict: 'EA', // TODO: see above
        replace: true,
        templateUrl: 'partials/step.html',
        transclude: true,
        scope: {
            title: '@',
            description: '@'
        },
        controller: function($scope) {
            // Determines if it should be displayed.  The stepset directive
            // controller needs to make sure only one shows up at a time.
            $scope.isDisplayed = false;
        },
        compile: function(elm, attrs, transclude) {
            return function postLink(scope, elm, attrs, ctrl) {
                ctrl.addStep(scope);
            };
        }
    };
}])

.directive('progressBar', [function() {
    var stepController;
    return {
        require: '^stepset',
        replace: true,
        templateUrl: 'partials/progress_bar.html',
        scope: {
        },
        controller: function($scope) {

        /*
        * Jumps to a step
        */
        $scope.jump = function(newIndex) {
            stepController.setIndex(newIndex);
        };
    },
    compile: function(elm, attrs, transclude) {
        return function postLink(scope, elm, attrs, ctrl) {
            stepController = ctrl;
        };
    }
};

}]);
;(function(angular) {
  "use strict";

  angular
    .module('distractology.common')
    .directive('scrollTo', function ($location, $anchorScroll) {
        return function(scope, element, attrs) {      
            element.bind('click', function(event) {
                event.stopPropagation();
                var off = scope.$on('$locationChangeStart', function(ev) {
                    off();
                    ev.preventDefault();
                });
                var location = attrs.scrollTo;
                $location.hash(location);
                $anchorScroll();
            });
        }
    });
}(window.angular));
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
