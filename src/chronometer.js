class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    
      this.intervalId = setInterval(() => {
        this.currentTime += 1 
        if (printTimeCallback) {
          printTimeCallback()
          this.currentTime += 3
        }
      },1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
