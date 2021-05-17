app.service('Data', ['$timeout', 'WS', 'Auth', function ($timeout, WS, Auth) {

    var s = {};

    s.initiated = false;

    s.user = null;

    s.isInitiated = function () {
        return s.initiated;
    };

    s.initiate = function (callback) {
        s.initiated = true;
        callback(null, "Success");
    };
    
    s.collections = {
        list: function (group, callback) {
            callback(null, Collections[group]);
        },
        details: function (groupId, collectionId, callback) {
            callback(null, Collections.getById(groupId,collectionId));
        },
    };

    return s;
}]);
