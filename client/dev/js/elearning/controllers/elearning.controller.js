;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ElearningController', ['$log', '$timeout', 'progressBarService', function($log, $timeout, progressBarService) {
            var self = this;
            self.title = 'ELEARNING'
            
            // initialize progress bar
            //progressBarService.value = 25;
            self.value = 25;
            self.items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
            
            // we will store all of our form data in this object
            self.formData = {};

            // function to process the form
            self.processForm = function() {
                alert('awesome!');
            };
            
            self.testSubmit = function () {
                alert("You clicked submit.");
            };
            
            self.closeAlert = function () {
                self.reason = null;
            };
        }]);
        
}(window.angular));
