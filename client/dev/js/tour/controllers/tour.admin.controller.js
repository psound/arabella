;(function(angular) {
 // "use strict";

  angular
    .module('distractology')
    .controller('AdmintourController', ['$log', '$state', '$stateParams', '$http', '$xtorage', '$timeout', function($log, $state, $stateParams, $http, $xtorage, $timeout) {
      var self = this;
      self.title = 'ADMINTOUR';

       self.Date = new Date();

      self.submitted = false;
      self.loggedIn = $stateParams.isAuth;

      function getSuccess(data) {
          self.tours = data;
          $.each(self.tours, function(i,v) {
              v['toDelete'] = false;
              self.sameday = false;
              if(v.rangeFrom != v.rangeTo) {
                  self.sameday = true;
              }
              var localDateFrom = new Date(v.rangeFrom);
              var localDateTo = new Date(v.rangeTo);
              var localTimeFrom = localDateFrom.getTime();
              var localOffsetFrom = localDateFrom.getTimezoneOffset() * 60000;
              var localTimeTo = localDateTo.getTime();
              var localOffsetTo = localDateTo.getTimezoneOffset() * 60000;
              v.rangeFrom = new Date(localTimeFrom + localOffsetFrom);
              v.rangeTo = new Date(localTimeTo + localOffsetTo);
              v['sameday'] = self.sameday;
          });
          self.tours['toDelete'] = true;
      };

        self.submit = function(details) {
            self.newTour = details;
            $http
                .post('/api/tours', details)
                .success(postSuccess)
                .error(postError);

            $log.info('TourController :: Bye!');
            $log.debug(details);
        }

        function postSuccess(data) {
            $log.info('TourController :: Success');
            $log.log(data);
            self.submitted = true;
            self.newTour['isActive'] = true;
            //self.tours.push(self.newTour);
            $('#tourForm')[0].reset();
            $timeout(function() {
                self.submitted = false;
                $state.reload();
            }, 2000);
        }

        function postError(data) {}

        self.deactivateTour = function(v) {
            $log.info('TourUpdateController :: Success');
            //console.log(v);
            $http
                 .post('/api/tours/updateActive', v)
                 .success(deactSuccess)
                 .error(deactError);
        };

        function deactSuccess(data) {};
        function deactError(data) {};

        self.dateOptions = {
            format : 'mm/dd/yyyy',
            minDate: '0'
        };

        self.dateOptions2 = {
            format : 'mm/dd/yyyy',
            minDate : self.rangeTo
        }

        self.erraseTour = function(d) {
            $.each(d, function(i, v){
                if(v.toDelete == true) {
                    v.isActive = false;
                    $http
                      .post('/api/tours/delete', v)
                      .success(deleteSuccess);
                }
            });

        };

        function deleteSuccess(data) {
            console.log(data);
        }
      if(self.loggedIn == true) {


          $log.info('AdminTourController - starting up, yeah!');

          $http
                .get('/api/tours')
                .success(getSuccess);

    } else {
      $('nav').hide();
  }
  }]);

}(window.angular));
