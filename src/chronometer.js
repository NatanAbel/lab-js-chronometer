class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    
      this.intervalId = setInterval(() => {
        if (printTimeCallback) {
          printTimeCallback()
          this.currentTime += 3
        }
        this.currentTime += 1 
      },1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    if(!this.currentTime) return 0
    return Math.floor(this.currentTime % 60) 
  }
    
  
  computeTwoDigitNumber(value) {

    if(value>=0 || value <10 ) return `0${value}`.slice(-2) 
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
