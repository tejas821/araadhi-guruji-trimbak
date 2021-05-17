ALOptions = {
    parse: function (str) {
        var id = str.split("---")[0];
        var details = str.split("---")[1].split(",");
        var properties = {};
        for (var propi in details) {
            var prop = details[propi];
            properties[prop.split("=")[0]] = prop.split("=")[1];
        }
        return {id: id, properties: properties};
    },
    parseBulk: function (details) {
        var elements = [];
        var items = details.split("__&__");
        for (var iti in items) {
            elements.push(this.parse(items[iti]));
        }
        return elements
    }
};
AL = {
    set: function (details) {
        var elements = ALOptions.parseBulk(details);
        console.log(elements);
        for (var ei in elements) {
            var element = elements[ei];
            console.log(element);
            TweenLite.set(element.id, element.properties);
        }
    },
    to: function (details, callback, time) {
        var element = ALOptions.parse(details);
        console.log(element);
        element.properties["onComplete"] = callback;
        TweenLite.to(element.id, time, element.properties);
    },
    sTo: function (details, callback, staggerDelay, time) {
        var element = ALOptions.parse(details);
        console.log(element);
        element.properties["onComplete"] = callback;
        TweenMax.staggerTo(element.id, time, element.properties, staggerDelay);
    },
    transformOrigin: function (id, origin) {
        if(origin == null){origin = '50% 50%'}
        TweenLite.set(id, {transformOrigin: origin});
    },
    typeInLetters: function (id, text, time, callback) {
        TweenMax.to(id, time, {text: text, onComplete: callback, ease: Linear.easeNone});
    },
    typeInWords: function (id, text, time, callback) {
        TweenMax.to(id, time, {text: {value: text, delimiter: " "}, onComplete: callback, ease: Linear.easeNone});
    }
}