/**
 * Created by hxsd on 2016/08/26.
 */
angular.module("myapp").controller("hotInCtrl",function($scope,$http){
    $scope.data = [
        {imgSrc_tx:"images/hot_tx.jpg",name:"xy07",time:"16分钟前发布",title:"花蛤怎么选购和清洗?",imgSrc:"images/hotIn_img2.jpg",content:"#九阳铁釜#在微博上看到的，因为我是九阳的粉，时刻关注！……"},
        {imgSrc_tx:"images/hot_tx.jpg",name:"xy07",time:"16分钟前发布",title:"花蛤怎么选购和清洗?",imgSrc:"images/subject_img1.jpg",content:"#九阳铁釜#在微博上看到的，因为我是九阳的粉，时刻关注！……"}
    ];
    $scope.loadMore = function(){
        $http.get("views/hotIn/hotIn.json")
            .success(function(data){
                Array.prototype.push.apply($scope.data,data)
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
    };
});