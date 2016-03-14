'use strict';
module.exports = function (ngModule) {
  ngModule.controller('LoginCtrl', function($state, Loader, $scope, Layout, Storage, User, $filter) {
    var vm = this;
    Layout.noFrame($scope);
    _.extend(this, {
      login: function() {
          if (vm.username && vm.password) {
              Loader.show($filter('translate')('auth.logining'));
              User.login(vm.username, vm.password).then(function(data) {
                  Storage.set('local', 'token', data.response.token);
                  Loader.hide();
                  $state.go('app.index');
              }, function (error) {
                  Loader.hide();
                  vm.error = error.response.error;
              });
          }
      }
    });
  });
};
