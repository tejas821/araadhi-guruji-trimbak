app.controller('homeCtrl', ['$scope', '$location', '$timeout', 'Data', '$routeParams',
    function ($scope, $location, $timeout, Data, $routeParams) {
        $scope.welcome = "Home screen";


        $scope.showHummingBirdGrid = function(){
            $scope.pageManager.goTo('/room-landing')
        };
        $scope.showAnnouncementBoard = function(){
            $scope.pageManager.goTo('/announcements')
        };
        $scope.showChatRooms = function(){
            $scope.pageManager.goTo('/chat-rooms')
        };

        $scope.activities = {
            selected: null,
            select: function (activity) {
                this.selected = activity;
            },
            resetSelection: function () {
                this.selected = null;
            }// ,
            // add: function (type) {
            //     $scope.pageManager.goTo('/add-activity');
            // }
        };

}]);



