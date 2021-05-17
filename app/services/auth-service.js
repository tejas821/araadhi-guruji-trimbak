app.service('Auth', ['$timeout',  function ($timeout) {

    var s = {};

    //s.userId = "demo";
    s.user = {
        details: null,
        set: function (user) {
            this.details = user;
            window.localStorage.appUser = JSON.stringify(user);
            window.localStorage.appUserId = user.id;
        },
        get: function () {
            if(this.details == null && window.localStorage.appUser != null){
                this.details = JSON.parse(window.localStorage.appUser);
            }
            return this.details;
        },
        isLoggedIn: function () {
            return this.get() != null;
        }
    };



    s.addAuthParams = function (params) {
        //params['uname'] = s.userId;
        return params;
    };


    return s;
}]);
