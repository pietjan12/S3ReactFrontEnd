export class RouletteWheel {
    constructor() {
        this.el = document.getElementsByClassName("wheel-wrapper")[0];
        this.position = 0;
        this.items = 37;
        this.itemsWidth = 50;
        this.spinTime = 6000;
        this.running = false;
        this.resultId = 0;
        this.totalWidth = (this.items + 1) * this.itemsWidth;
        //determine number positions based on screen
        this.getNumbers(window.innerWidth);
    }

    getNumbers(width) {
        if(width <= 394) {
            //basically unreadable phone, starts at 32
            this.numbers = [
                32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
                5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0
            ];
        } else if(width <= 495) {
            //smaller screen, starts at 15
            this.numbers = [
                15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
                5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32
            ];

        } else if(width <= 1130) {
            //tablet-ish screen, starts at 19
            this.numbers = [
                19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
                5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 
            ];
        }
        else {
            //full screen (starts at 4)
            this.numbers = [
                4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
                5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 
            ];
        }
    }

    start(id) {
        this.resultId = id;
        var indexOfID = this.numbers.indexOf(this.resultId);

        var resultOffset = indexOfID * this.itemsWidth;
        var loops = 3; //+ Math.floor(Math.random() * 3);
        this.totalDistance = (loops * this.totalWidth) + resultOffset;
        this.running = true;
        this.startTime = performance.now();

        this.gameLoop(this.startTime);
    }

    gameLoop(rafTime) {
        this.update(rafTime);
        if (this.running) {
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    update(rafTime) {
        var deltaTime = rafTime - this.startTime;
        if (deltaTime >= this.spinTime) {
            this.running = false;
            return;
        }

        // t = timeFraction
        var t = this.easeOutSine(deltaTime, 0, 1, this.spinTime);
        this.position = Math.round(t * this.totalDistance);
        var translateX = this.position % this.totalWidth;
        this.el.style.transform = 'translateX(-' + translateX + 'px)';
    }

    requestAnimFrame() {
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          return window.setTimeout(callback, 1000 / 60);
      };
    }

    // t: current time
    // b: start value
    // c: change in value
    // d: duration
    easeOutSine(t,b,c,d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    }
}