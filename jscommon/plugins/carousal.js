jsCarousal = {
    instance: null,
    options: {},
    state: {currentIndex: 0, currentX: 0},
    reset: function(){
        if(this.instance != null){
            this.instance.kill();
            this.instance = null;
        }
        if(this.options.id != null){
            TweenMax.set(this.options.id,{x: 0});
            this.options = {};
        }
        this.state = {currentIndex: 0, currentX: 0};
    },
    create: function (options) {

        this.reset();

        this.options = options;

        var state = this.state;
        this.instance = Draggable.create(this.options.id, {
            type: "x",
            throwProps: true,
            throwResistance:0,
            minDuration:0.3,
            maxDuration:0.5,
            overshootTolerance: 1.1,
            snap: {
                x: function (n) {
                    state.previousIndex = state.currentIndex;
                    state.previousX = state.currentX;
                    if(n < state.currentX) state.currentIndex++;
                    if(n > state.currentX) state.currentIndex--;
                    if (state.currentIndex < 0) {
                        state.currentIndex = 0;
                    } else if (state.currentIndex > options.count - 1) {
                        state.currentIndex = options.count - 1
                    }

                    state.currentX = (state.currentIndex * -1 * options.width) + (state.currentIndex*40);
                    return state.currentX;
                }
            },
            onDragStart: function () {
              if(options.onDragStart){
                  options.onDragStart();
              }
            },
            onDragEnd: function () {
              if(options.onDragEnd){
                  options.onDragEnd(state.currentIndex);
              }
            },
            onThrowComplete: function () {
                if(options.onChange){
                    options.onChange(state.currentIndex, state.previousIndex)
                }
            }

        })[0];
        if(options.onChange) {
            options.onChange(0,-1);
        }

    },
    disable: function () {
        this.instance.disable();
    },
    enable: function () {
        this.instance.enable();
    }



}
;