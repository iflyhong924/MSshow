/**
 * Created by hxsd on 2016/8/26.
 */
angular.module("myapp").controller("meCtrl",function($scope){
    $scope.que=false;
    $scope.toggler=function(){
        $scope.que=true;
    }
});