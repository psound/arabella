;(function(angular) {
  "use strict";

  angular
    .module('distractology')
    .controller('TourController', ['$log', '$state', '$http', function($log, $state, $http) {
      var self = this;
      self.title = 'THE TOUR';
      self.subtitle = '';

      $http
          .get('/api/tours/getAllActive')
          .success(getSuccess)

    function getSuccess(data) {

      $.each(data, function(i,v){
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
      self.activeTours = data;
      $log.log(data);
    };

    }]);
}(window.angular));
