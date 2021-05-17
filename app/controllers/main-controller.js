app.controller('mainCtrl', ['$scope', '$location', '$window', '$interval', '$timeout', '$sce', 'Auth',

    function ($scope, $location, $window, $interval, $timeout, $sce, Auth) {
        $scope.UIHelper = UIHelper;
        $scope.backTransition = false;
        $scope.qaMode = (window.localStorage.qaMode ? eval(window.localStorage.qaMode) : false);
        $scope.setQAMode = function(mode){
            $scope.qaMode = mode;
            window.localStorage.qaMode = mode+"";
        };

        $scope.user = null;
        $scope.screen = {
            height: $window.innerHeight,
            width: $window.innerWidth,
            loading: false,
            update: function () {
                this.height = $window.innerHeight;
                this.width = $window.innerWidth;
            }
        };

        $scope.pageManager = {
            transitionType: '',
            goTo: function (url) {
                this.transitionType = "forwardAnimate";
                $location.path(url);
                console.log(this.transitionType);
            },
            goBack: function (url) {
                this.transitionType = "backAnimate";
                $location.path(url);
                console.log(this.transitionType);
            },
            popup: function (url) {
                this.transitionType = "popUpAnimate";
                $location.path(url);
                console.log(this.transitionType);
            },
            popdown: function (url) {
                this.transitionType = "popDownAnimate";
                $location.path(url);
                console.log(this.transitionType);
            },
            backPressed: function (e) {
                alert("Back pressed");
            }
        };





        $scope.initiateApp = function (callback) {
            if(Auth.user.isLoggedIn()){
                if($scope.user == null){
                    $scope.user = Auth.user.get();
                    callback(null, "success");
                }else{
                    callback(null, "success");
                }
            }else{
                $scope.pageManager.goTo("/access/landing");
            }
        };

        $scope.setStatusBarOptions = function (color, isDarkFG) {
            $timeout(function () {
                try {
                    if (StatusBar) {
                        if (isDarkFG) {
                            StatusBar.styleDefault();
                        } else {
                            StatusBar.styleLightContent();
                        }
                        StatusBar.backgroundColorByHexString(color);
                    }
                } catch (e) {
                }
            }, 100);
        };

        $scope.handleError = function (error, retryFunction) {
            if (confirm(error + ". Do you want to retry?")) {
                retryFunction();
            }
        };

        $scope.html = function (content) {
            if(!content){
                content = "";
            }
            content = content.split("\n").join("<br>");
            return $sce.trustAsHtml(content);
        };

        $scope.runOnUIThread = function () {
            try{
                $scope.$apply();
            }catch(e){}
        };



        $scope.$on('$routeChangeStart', function ($event, next, current) {
            //console.log("next");
            //console.log(next['$$route'].originalPath);
            /*if(parent.FrameListener.urlChanged){
                parent.FrameListener.urlChanged(next,current);
            }*/
            /*if(FrameListener.urlChanged){
                FrameListener.urlChanged(next,current);
            }*/
            //Logger.trackPageChange(next.originalPath,{from: current.originalPath})
        });


    }]);
