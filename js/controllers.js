/**
 * Created by zhaimeiling on 2015/8/6.
 */
angular.module('controllers',[])
.controller('indexCtrl',['$scope', function ($scope) {
    console.log('indexCtrl');
}])
.controller('listCtrl',['$scope', function ($scope) {
    console.log('listCtrl');
}])
.controller('detailCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
    $scope.name=$rootScope.$stateParams.detailId;
}])
.controller('detailInfoCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
    $scope.name=$rootScope.$stateParams.detail;
}])