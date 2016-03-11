/* globals angular */
;(function(angular) {
  //"use strict";

  angular
    .module('distractology', [
      'distractology.common',
      'ngMessages',
      'ui.date',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'btford.socket-io',
      'emd.ng-xtorage',
      'ngSanitize',
      'angularTrix',
      'ngCsv',
	  'com.2fdevs.videogular',
	  'com.2fdevs.videogular.plugins.controls',
      'com.2fdevs.videogular.plugins.overlayplay',
      'com.2fdevs.videogular.plugins.poster',
      'com.2fdevs.videogular.plugins.buffering',
      'checklist-model',
      'angular-md5']);

}(window.angular));
