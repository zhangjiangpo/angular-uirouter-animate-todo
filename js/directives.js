/**
 * Created by zhaimeiling on 2015/8/6.
 */
angular.module('directives',[])
.directive('pageBack',['$rootScope','$timeout',function ($rootScope,$timeout) {
    return {
        restrict:'E',
        template:'<a class="page-back-btn" href="{{us.state}}" ng-click="pageBack()"><<返回</a>',
        replace:true,
        link: function (scope, element, attr) {
            scope.us={
                state:attr.uihref
            }
            scope.pageBack= function () {
                $rootScope.pageClass[attr.pageclass]=$rootScope.pageClassValue.prePage;
                $timeout(function () {
                    $rootScope.pageClass[attr.pageclass]=$rootScope.pageClassValue.nextPage;
                },$rootScope.pageClassValue.time)
            }
        }
    }
}])
