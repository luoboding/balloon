'use strict';
var ngModule = angular.module('SagittariusApp', [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'app.common',
    'app.nav',
]);

ngModule.config(function ($locationProvider) {
    $locationProvider.html5Mode(false);
});

ngModule.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
});

ngModule.config(function ($httpProvider) {
    $httpProvider.interceptors.push('GlobalInterceptor');
});

ngModule.run(function () {
});
