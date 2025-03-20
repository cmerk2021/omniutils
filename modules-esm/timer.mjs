import OmniUtils from "./omniutils.mjs";
var tempExport

try {
  OmniUtils.internal.debug("Timer class imported.")

  class Timer {
    /**
     * Creates a new Timer instance.
     * @param {number} length - The length of the timer in milliseconds.
     * @param {function} callback - The callback function to be executed when the timer finishes.
     */
    constructor(length, callback) {
      this.length = length;
      this.callback = callback;
      this.startTime = null;
      this.elapsedTime = 0;
      this.paused = true;
      this.intervalId = null;
    }
  
    /**
     * Starts the timer.
     */
    start() {
      if (this.paused) {
        this.startTime = Date.now() - this.elapsedTime;
        this.intervalId = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          if (this.elapsedTime >= this.length) {
            clearInterval(this.intervalId);
            this.callback();
          }
        }, 10); // Update every 10ms
        this.paused = false;
      }
    }
  
    /**
     * Pauses the timer.
     */
    pause() {
      if (!this.paused) {
        clearInterval(this.intervalId);
        this.paused = true;
      }
    }
  
    /**
     * Resumes the timer.
     */
    resume() {
      if (this.paused) {
        this.start();
      }
    }
  
    /**
     * Restarts the timer.
     */
    restart() {
      this.elapsedTime = 0;
      this.paused = true;
      clearInterval(this.intervalId);
      this.start();
    }
  
    /**
     * Returns the remaining time in milliseconds.
     * @returns {number} The remaining time.
     */
    getRemainingTime() {
      return Math.max(0, this.length - this.elapsedTime);
    }
  
    /**
     * Returns the elapsed time in milliseconds.
     * @returns {number} The elapsed time.
     */
    getElapsedTime() {
      return this.elapsedTime;
    }
  }
  
  tempExport = Timer;
} catch (error) {
  OmniUtils.internal.error(error)
}

export default tempExport;