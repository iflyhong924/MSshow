/**
 *
 */
angular.module("myapp").controller("login2Ctrl",function($scope,$location){
    $scope.link=function(registerForm){
        if(registerForm.$invalid){
            $location.path("login");
            //return tabs.home;
        }else{
            $location.path("home");
            //return tabs.home;
        }
    };
    $scope.mytVar = false;
    $scope.myfVar = true;

    $scope.run=function(){
        $scope.mytVar = true;
        $scope.myfVar = false;
        console.log('1')
    };
    $scope.que={};
    $scope.que.togg=false;
    $scope.toggler=function(){
        $scope.que.togg=true;
        console.log($scope.que.togg);
    }
});