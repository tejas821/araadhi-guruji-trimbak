var UIHelper = {
    commonWords: ['to', 'another', 'of', 'very', 'and', '&', 'into', 'of', 'from', "that", "the", "all", "by", "with", "its", "it", "it's", "main", "along"],
    stripPunctuation: function (content) {
        var pChars = [",", "."];
        for (var pi in pChars) {
            var ch = pChars[pi];
            content = content.split(ch).join("")
        }
        return content;
    },
    stripContentTags: function (content) {
        var pChars = ["i", "c", "e", "k", "v", "f", "l", "d", "h", "em", 'b', 'i', 'hl1', 'hl2', 'hl3', 'hl4', 'hl5', 'hl6', 'hl7', 'hl8', 'hl9'];

        for (var pi in pChars) {
            var ch = pChars[pi];
            content = content.split("<" + ch + ">").join("")
            content = content.split("</" + ch + ">").join("")
        }
        return content;
    },
    stripCIPTags: function (content) {
        var tags = ['em', 'b'];
        for (var tag in tags) {
            var tg = tags[tag];
            content = content.split("<" + tg + ">").join("");
            content = content.split("</" + tg + ">").join("")
        }
        return content;
    },
    getTagValue: function (str, tag) {
        var startTag = "<"+tag+">";
        var endTag = "</"+tag+">";
        if(str.indexOf(startTag) == -1 || str.indexOf(endTag) == -1){
            return "";
        }
        return str.substr(str.indexOf(startTag) + startTag.length, str.indexOf(endTag) - str.indexOf(startTag) - startTag.length);
    }
};