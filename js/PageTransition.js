/**
 *    -------------- Page Transition-------------
 *
 *     PageTransition is an overlay of graphic
 *     pixels that get drawn op top of everything
 *     else. They then start disappearing halfway
 *     through, makeing transitions between screens
 *     more seemless.
 *
 *     Start PageTransition by using `init` method:
 *
 *          PageTransition.init();
 *
 *     Change behaviour with configuration:
 *
 *         PageTransition.init({
 *             duration: 500,
 *             pixelW: 40,
 *             pixelH: 10,
 *             colorArray: ["red", "green", "blue"]
 *         });
 *
 *     Configuration options are:
 *
 *         duration: length of transition in m/s.
 *         pixelW: width of each pixel.
 *         pixelH: height of each pixel.
 *         colorArray: colors used in transition.
 *
 */

const PageTransition = new (function () {

    this.init = function (config) {
        // We cant init when a transition is ongoing
        if (transitioning) {
            return;
        }

        // Overwrite defaults with config
        this.duration        = config.duration   || 1000; // ms
        this.pixelW          = config.pixelW     || 10;
        this.pixelH          = config.pixelH     || 10;
        this.colorArray      = config.colorArray || ["#ff3377", "#ee00aa", "#7744cc", "#4466cc", "#88bbdd"];

        // Set up local variable needed
        this.colCount        = CANVAS_WIDTH / this.pixelW;
        this.rowCount        = CANVAS_HEIGHT / this.pixelH;
        this.pixelCount      = this.colCount * this.rowCount;
        this.pixelRenderRate = this.pixelCount / (framesPerSecond*((this.duration/2)/1000));
        this.pixelArr        = new Array(this.pixelCount).fill(false);
        this.tranInArr       = Array.apply(null, {length: this.pixelCount}).map(Number.call, Number) // [1, 2, 3, ... 4800]
        this.tranOutArr      = Array.apply(null, {length: this.pixelCount}).map(Number.call, Number)

        // Start the transition in main loops
        transitioning = true;
    }

    this.update = function () {
        // PixelArr -> random colors at randomn spots
        if (this.tranInArr.length > 0) {
            this.updatePixelColor(this.tranInArr, this.colorArray);

        // PixelArr -> transparent at random spots
        } else if (this.tranOutArr.length > 0) {
            this.updatePixelColor(this.tranOutArr, ["rgba(225,225,225,0)"]);

        // Stop the transition
        } else {
            transitioning = false;
        }
    }

    this.draw = function () {
        for (let i=0; i<this.pixelArr.length; i++) {
            if (this.pixelArr[i]) {
                colorRect(
                    this.gridPosX(i),
                    this.gridPosY(i),
                    this.pixelW,
                    this.pixelH,
                    this.pixelArr[i]
                );
            }
        }
    }

    this.gridPosX = function (index) {
        return (index % this.colCount) * this.pixelW;
    }

    this.gridPosY = function (index) {
        return Math.floor(index / this.colCount) * this.pixelH;
    }

    this.updatePixelColor = function (array, colors) {
        // Remove a random # in array
        // -> use to populate pixelArr with color
        for (var i=0; i<this.pixelRenderRate; i++) {
            let color = colors[Math.floor(Math.random() * colors.length)];
            var x = array.splice(Math.floor(Math.random()  *array.length), 1);
            this.pixelArr[x] = color;
        }
    }

})();
