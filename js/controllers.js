/**
 * Created by zhaimeiling on 2015/8/6.
 */
angular.module('controllers',[])
.controller('indexCtrl',['$scope', function ($scope) {

}])
.controller('listCtrl',['$scope', function ($scope) {

}])
.controller('detailCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
    $scope.name=$rootScope.$stateParams.detailId;
}])
