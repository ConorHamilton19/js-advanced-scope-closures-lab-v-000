function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let distance = Math.abs(start - end)
    let work = blockRange - distance

    if ( work > 0 ){
      return `within range by ${work}`
    } else {
      return `${Math.abs(work)} blocks out of range`
    }
  }
}

function produceTipCalculator(dec) {
  return function(fare) {
    return fare * dec
  }
}

function createDriver() {
  let driverId = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
