var CollectionUtils = {

    length: function (jsonObject) {
        var size = 0;

        if(jsonObject == null){
            return size;
        }

        for (var jsonIndex in jsonObject) {
            size++;
        }
        return size;
    },

    keys: function (jsonObject) {
        var ret = [];
        for (var jsonIndex in jsonObject) {
            ret.push(i);
        }
        return ret;
    },

    firstValue: function (jsonObject) {
        for (var jsonIndex in jsonObject) {
            return jsonObject[jsonIndex];
        }
        return null;
    },

    firstKey: function (jsonObject) {
        for (var jsonIndex in jsonObject) {
            return jsonIndex;
        }
        return null;
    },

    isNotEmpty: function (jsonObject) {
        for (var jsonIndex in jsonObject) {
            return true;
        }
        return false;
    },

    isEmpty: function (jsonObject) {
        for (var jsonIndex in jsonObject) {
            return false;
        }
        return true;
    },

    getRandomElementFromArray: function (arr) {
        return arr[Math.floor((Math.random() * arr.length))];
    },

    addAllObjects: function (toArr, fromArr) {
        for(var fai in fromArr){
            toArr.push(fromArr[fai]);
        }
    },

    shuffleArray: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },
    reverseArray: function (arr) {
        var newArr = [];
        for(var arrIndex = arr.length - 1; arrIndex >= 0; arrIndex--){
            newArr.push(arr[arrIndex]);
        }
        return newArr;
    },

    clone: function (from, to) {
        for (var key in from) {
            to[key] = from[key];
        }
        return to;
    },
    cloneObject: function (ob) {
        return JSON.parse(JSON.stringify(ob));
    },
    convertArrayToHash: function (arr, propertyName) {
        var ret = {};
        for (var arrIndex in arr) {
            ret[arr[arrIndex][propertyName]] = arr[arrIndex];
        }
        return ret;
    },
    convertHashtoArray: function (arr, propertyName) {
        var ret = [];
        for (var key in arr) {
            arr[key][propertyName] = key;
            ret.push(arr[key]);
        }
        return ret;
    },
    getIndexByProperty: function (list, name, value) {
        for (var ind in list) {
            if (list[ind][name] == value) {
                return ind;
            }
        }
        return -1;
    },
    getHighestValueForProperty: function (list, name, default_value) {
        var ret = default_value;
        for (var ind in list) {
            if (list[ind][name] > ret) {
                ret = list[ind][name];
            }
        }
        return ret;
    }

};

