StringUtils = {
    isNotEmpty: function (str) {
        return (str != null && str.length > 0);

    },
    split: function (str, separator1, separator2) {
        if (str.indexOf(separator1) != -1) {
            return str.split(separator1);
        } else {
            return str.split(separator2);
        }
    },
    getSaulationByTimeOfDay: function () {
        var ret = "Welcome";
        var currentTime = new Date();
        if (currentTime.getHours() < 4) {

        } else if (currentTime.getHours() < 12)
            ret = ("Good Morning,");
        else if (currentTime.getHours() < 17)
            ret = ("Good Afternoon,");
        else if (currentTime.getHours() < 21)
            ret = ("Good Evening,");

        return ret;
    }

}
;