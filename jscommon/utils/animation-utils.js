var AnimationUtils = {

    loadElements: function (variable, names) {
        for(var nm in names){
            variable[names[nm]] = document.getElementById(names[nm]);
        }
    },

    transformOriginFromDragandDrop: function (dragEle, dropEle, xOffset, yOffset) {

        var targetArea = dropEle.getBoundingClientRect();
        var cardArea = dragEle.getBoundingClientRect();

        var midPointX = (targetArea.left+targetArea.right)/2;
        var midPointY = (targetArea.top+targetArea.bottom)/2 - 20;//offset for card height for effect from downside


        var cardMidPointX = (cardArea.left);
        var cardMidPointY = (cardArea.top);

        return ((midPointX - cardMidPointX - xOffset)+'px '+(midPointY - cardMidPointY - yOffset)+'px');
    }

};