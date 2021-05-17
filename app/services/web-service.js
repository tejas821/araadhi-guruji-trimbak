app.service('WS', ['$timeout', '$http', 'Auth', function ($timeout, $http, Auth) {

    var s = {};

    s.baseUrl = AppConstants.baseUrl;


    s.postHttp = function (url, params, callback) {
        console.log("POST " + url);
        console.log(params);
        $http.post(s.baseUrl + url, params).then(function (result) {
            if (result.data.errorType != null || result.data.errorMessage != null) {
                callback(result.data.errorMessage, null);
            } else {
                callback(null, result.data);
            }
        }, function (error) {
            callback(error);
        });
    };

    s.getHttp = function (url, params, successCb, failureCb) {
        console.log(params);
        $http.get(s.baseUrl + url, {params: params}).then(function (result) {
            if (result.data.errorType != null || result.data.errorMessage != null) {
                callback(result.data.errorMessage, null);
            } else {
                callback(null, result.data);
            }
        }, function (error) {
            callback(error);
        });
    };

    return s;
}]);
