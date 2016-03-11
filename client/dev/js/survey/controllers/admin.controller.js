;(function(angular) {
  //"use strict";

  angular
    .module('distractology')
    .controller('AdminController', ['$log', '$state', '$stateParams', '$http', '$xtorage', function($log, $state, $stateParams, $http, $xtorage) {
      var self = this;
      self.title = 'ADMIN';

      self.loggedIn = $stateParams.isAuth;
      if(self.loggedIn == true) {

          $log.info('AdminController - starting up, yeah!');
          self.badEmail = '';
          self.errorReport = false;

          var i = 0,
          oJson = [],
          sKey;
          for (; sKey = window.localStorage.key(i); i++) {
              sKey = window.localStorage.key(i);
              if(sKey.includes('survey')) {
                  oJson.push(sKey);
             }
          }
           self.available = oJson.length;

          var stored = {};
          $.each(oJson, function(i,v){
              stored[v]= $xtorage.get(v);
              stored[v]['deleteOn']=false;
          });

          self.result = stored;

          self.pushData = function(stored) {
              $.each(self.result, function(i,v){
                  console.log(v);
                  $http
                      .post('/api/students', v)
                      .success(postSuccess)
                      .error(postError);

                  $log.info('SurveyController :: Bye!');
              });
          }
          function postSuccess(data) {
              $log.info('Saved Data:: ' + JSON.stringify(data, null, 4 ));
              $log.info('AdminController :: Success & Clearing Local Storage');
              $xtorage.remove("survey"+data[0].surveyType+"-"+data[0].code);
              //$state.reload();
              delete stored["survey"+data[0].surveyType+"-"+data[0].code];
              self.result = stored;
              self.errorReport = false;
          }

          function postError(data) {
              self.errorReport = true;
              $log.info('Admin Controller :: Error');
              $log.info('Error: ' + JSON.stringify(data, null, 4));
              self.badEmail = self.badEmail + JSON.stringify(data, null, 4) + " ";
              self.currBadEmail = JSON.stringify(data, null, 4).replace(/"/g, "");
              $.each(stored, function(i,v){
                  if(v.email == self.currBadEmail) {
                      stored[i].deleteOn = true;
                  }
              });
              self.result = stored;
              swal({
                  title: "Email Already Exists",
                  text: self.badEmail + ":: not transfered!",
                  type: "error",
                  showCancelButton: false,
                  closeOnConfirm: true
              });
          }

          self.delRow = function(data) {
              $xtorage.remove("survey"+data.surveyType+"-"+data.code);
              delete stored["survey"+data.surveyType+"-"+data.code];
              self.result = stored;
              self.available--;
          }

          //$log.info('Saved Data:: ' + JSON.stringify(stored, null, 4 ));
    } else {
        $('nav').hide();
    }

  }]);
}(window.angular));
