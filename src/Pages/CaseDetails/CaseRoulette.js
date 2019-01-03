export class CaseRoulette {
    constructor(element, itemsize, itemwidth, items) {
        this.el = element;
        this.position = 0;
        this.items = itemsize;
        this.itemsWidth = itemwidth;
        this.spinTime = 6000;
        this.running = false;
        this.resultId = 0;
        this.screenOffSet = 0;
        this.totalWidth = (this.items) * this.itemsWidth;
        this.numbers = items;
        //determine item positions based on screen
        this.getPositions(window.innerWidth);
    }

    swapArrayElements(indexA, indexB) {
        var temp = this.numbers[indexA];
        this.numbers[indexA] = this.numbers[indexB];
        this.numbers[indexB] = temp;
    };

    getPositions(width) {
         //only change the widths where the numbers actually change
         if(width <= 449) {
            this.screenOffSet = 600
         } else if(width <= 749) {
            //starts at 2nd to last item in list
            this.swapArrayElements(0, this.numbers.length - 3);
            this.swapArrayElements(1, this.numbers.length - 2);
            this.swapArrayElements(2, this.numbers.length - 1);
            this.screenOffSet = 450;
        } else if(width <= 1049) {
            //starts at 1 to last item in list
            this.swapArrayElements(0, this.numbers.length - 2);
            this.swapArrayElements(1, this.numbers.length - 1);
            this.screenOffSet = 300;
        }
        else if(width <= 1349) {
            //starts at last item in list
            this.swapArrayElements(0, this.numbers.length - 1);
            this.swapArrayElements(1, this.numbers.length - 1);
            this.swapArrayElements(2, this.numbers.length - 1);
            this.screenOffSet = 150;
        }
    }


    start(id) {
        this.el.style.transform = 'translateX(-' + 0 + 'px)';
        this.resultId = id;
        var indexOfID = this.numbers.map(e => e.itemID).indexOf(this.resultId);
        var resultOffset = (indexOfID * this.itemsWidth) + this.screenOffSet +  Math.floor(Math.random() * ((this.itemsWidth / 2) - 5) ) + 5;
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