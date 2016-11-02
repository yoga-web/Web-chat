( function(){

var app = angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('indigo')
      .primaryPalette('indigo')
      .accentPalette('pink');

    $mdThemingProvider.theme('custom')
       .primaryPalette('blue', {
	      'default': '700', 
	      'hue-1': '100', 
	      'hue-2': '600', 
	      'hue-3': 'A100'
	    })
        .accentPalette('blue', {
	      'default': '700', 
	      'hue-1': '100', 
	      'hue-2': '600', 
	      'hue-3': 'A100'
	    })
    
    // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
    $mdThemingProvider.alwaysWatchTheme(true);
  })

.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
// Select
  $scope.departments = [
    { id: 1, name: 'Отдел маркетинга' },
    { id: 2, name: 'Отдел сбыта' },
    { id: 3, name: 'Отдел бухгалтерии' }
  ];
  $scope.selectedDepartment = { id: 1, name: 'Отдел маркетинга' };
// Switch
  $scope.sound = {
    true: true
  };
  $scope.outcall = {
    true: true
  };
// Dialogs
$scope.showClientDialog = function(ev) {
	$mdDialog.show({
	  controller: DialogController,
	  templateUrl: 'client-dialog.tmpl.html',
	  parent: angular.element(document.body),
	  targetEvent: ev,
	  clickOutsideToClose:true
	});
};
$scope.showCallbackDialog = function(ev) {
	$mdDialog.show({
	  controller: DialogController,
	  templateUrl: 'callback-dialog.tmpl.html',
	  parent: angular.element(document.body),
	  targetEvent: ev,
	  clickOutsideToClose:true
	});
};
$scope.showPersonalInformationDialog= function(ev) {
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'personalinfo-dialog.tmpl.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true
  });
};
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
});
})()
// Color theme