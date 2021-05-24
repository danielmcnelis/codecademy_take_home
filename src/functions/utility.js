
const shuffleArray = (arr) => {
    let currIndex = arr.length
    let tempValue
    let randIndex
  
    while (0 !== currIndex) {
        randIndex = Math.floor(Math.random() * currIndex)
        currIndex -= 1
  
        tempValue = arr[currIndex]
        arr[currIndex] = arr[randIndex]
        arr[randIndex] = tempValue
    }
  
    return arr
}

module.exports = {
    shuffleArray
}



