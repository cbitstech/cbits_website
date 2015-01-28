'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:AcademicCtrl
 * @description
 * # AcademicCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('ResearchCtrl', function ($scope,$location,Router,Staff) {

    $scope.section = Router.getSection($location);
    $scope.staff = Staff.getSection($location);


  });
