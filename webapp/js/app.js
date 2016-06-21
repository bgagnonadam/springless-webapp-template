angular.module('telephonyApp',['ui.router','ngResource','telephonyApp.controllers','telephonyApp.services']);

angular.module('telephonyApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('records',{
        url:'/records',
        templateUrl:'partials/records.html',
        controller:'RecordListController'
    }).state('viewRecord',{
       url:'/records/:id',
       templateUrl:'partials/record-view.html',
       controller:'RecordViewController'
    }).state('newRecord',{
        url:'/records',
        templateUrl:'partials/record-add.html',
        controller:'RecordCreateController'
    }).state('editRecord',{
        url:'/records/:id',
        templateUrl:'partials/record-edit.html',
        controller:'RecordEditController'
    });
}).run(function($state){
   $state.go('records');
});