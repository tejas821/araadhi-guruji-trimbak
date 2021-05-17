
app.directive('imgLoad', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(function () {
                    scope.$eval(attrs.imgLoad);
                });
            });
            element.bind('error', function(){
                alert('image could not be loaded');
            });
        }
    };
});