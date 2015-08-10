/**
 * Created by zhaimeiling on 2015/8/6.
 */
angular.module('directives',[])
.directive('pageBack',['$rootScope','$timeout',function ($rootScope,$timeout) {
    return {
        restrict:'E',
        //template:'<a class="page-back-btn" href="{{us.state}}" ng-click="pageBack()"><<返回</a>',
        //replace:true,
        compile: function (element,attr) {
            var a=document.createElement('a');
            a.className='page-back-btn';
            a.setAttribute('href',attr.uihref);
            a.setAttribute('ng-click','pageBack()');
            a.innerHTML=element.html()||'<<返回';
            element.parent().append(a);
            element.remove();
            return function (scope, element, attr) {
                scope.pageBack= function () {
                    $rootScope.pageClass[attr.pageclass]=$rootScope.pageClassValue.prePage;
                    $timeout(function () {
                        $rootScope.pageClass[attr.pageclass]=$rootScope.pageClassValue.nextPage;
                    },$rootScope.pageClassValue.time)
                }
            }
        }
    }
}])
.directive('pageView', function () {
    return {
        restrivt:'E',
        compile: function (element, attr) {
           /* var section=document.createElement('section');
            section.className="page-view";
            section.innerHTML=element.html();
            section.style.height=document.documentElement.clientHeight+'px';
            attr.ngController?section.setAttribute('ng-controller',attr.ngController):'';
            element.parent().append(section);
            element.remove();*/
            element[0].style.height=document.documentElement.clientHeight+'px'
        }
    }
})