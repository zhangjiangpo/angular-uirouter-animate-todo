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
        list:$rootScope.pageClassValue.nextPage,
        detail:$rootScope.pageClassValue.nextPage,
        detailInfo:$rootScope.pageClassValue.nextPage
    }


    $rootScope.$on('$stateChangeStart',function(evt, toState, toParams, fromState, fromParams){
            // 如果需要阻止事件的完成
           // evt.preventDefault();
        console.log(evt);
    });
    $rootScope.$on('$viewContentLoading',function(event, viewConfig){
            // 获取任何视图设置的参数，以及一个特殊的属性：
            console.log(viewConfig);
        //var pageView=document.querySelectorAll('.page-view');
    });
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
            templateUrl:'./template/list/listContainer.html'
        })
        .state('listContainer.list',{
            url:"/list",
            views:{
                'list':{
                    templateUrl:'./template/list/list.html'
                }
            }
        })
        .state('listContainer.list.detail',{
            url:'/detail/:detailId',
            views:{
                "detail":{
                    templateUrl:'./template/list/detail.html'
                }
            }
        })
        .state('listContainer.list.detail.detailInfo',{
            url:'/detailInfo/:detail',
            views:{
                "detailInfo":{
                    templateUrl:'./template/list/detailInfo.html'
                }
            }
        })
            .state('listContainer2',{
                url:'',
                abstract:true,
                templateUrl:'./template/list2/listContainer.html'
            })
            .state('listContainer2.list',{
                url:"/list2",
                views:{
                    'list':{
                        templateUrl:'./template/list2/list.html'
                    }
                }
            })
            .state('listContainer2.list.detail',{
                url:'/detail/:detailId',
                views:{
                    "detail":{
                        templateUrl:'./template/list2/detail.html'
                    }
                }
            });
}])
