angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('versionCtrl',function($scope, $cordovaAppVersion){
  $scope.version2=function(){
   $cordovaAppVersion.getVersionNumber().then(function (version) {
      var appVersion = version;
      alert(appVersion);
      return appVersion;
   }); 
  }
})
//content sharing
.controller('PlaylistsCtrl', function($scope, $cordovaSocialSharing) {
$scope.shareContent=function(){
  
   $cordovaSocialSharing.share('message', 'subject', "http://www.rudram.co/assets/img/logo4.png") // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
}

//In App browser
  var Options = {
    location: 'yes',
    clearcache: 'no',
    toolbar: 'no'
  };

$scope.browser=function(){
  $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });
}
})

