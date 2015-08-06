/**
 * Created by zhaimeiling on 2015/8/6.
 */
angular.module('angularToDo',['ui.router','ngAnimate','directives','controllers'])
.run(['$rootScope','$state','$stateParams',function ($rootScope,$state,$stateParams) {
    $rootScope.$state=$state;
    $rootScope.$stateParams=$stateParams;
    $rootScope.pageClassValue={
        nextPage:'nextPage',
        prePage:'prePage',
        time:600
    }
    $rootScope.pageClass={
        index:$rootScope.pageClassValue.nextPage,
        list:$rootScope.pageClassValue.nextPage
    }
}])
.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'./template/index.html'
        })
        .state('listContainer',{
            url:'',
            abstract:true,
            templateUrl:'./template/listContainer.html'
        })
        .state('listContainer.list',{
            url:"/list",
            templateUrl:'./template/list.html'
        })
        .state('listContainer.detail',{
            url:'/detail/:detailId',
            templateUrl:'./template/detail.html'
        })
}])
