const self = {
  startStop: () => {
    let firstLast = [], start = 1, stop = 100
    firstLast.push(start)
    firstLast.push(stop)
    return firstLast
  },
  printNumber: () => {
    let numbers = []
    for(let i = self.startStop()[0]; i <= self.startStop()[1]; i++) {
      numbers.push(i)
    }
    return numbers
  },
  printTimesThree: () => {
    let threes = []
    for(let i = 3; i <= self.startStop()[1]; i+=3) {
      numbers.push(i)
    }
    return threes
  },
  printFizz: () => {
    let fizz = []
    for(let i = 1; i <= self.startStop()[1]; i++) {
      if(i % 3 === 0) {
        fizz.push('Fizz')
      } else {
        fizz.push(i)
      }
    }
    return fizz
  },
  printBuzz: () => {
    let buzz = []
    for(let i = 1; i <= self.startStop()[1]; i++) {
      if(i % 5 === 0) {
        buzz.push('Buzz')
      } else {
        buzz.push(i)
      }
    }
    return buzz
  },
  printFizzBuzz: () => {
    let fizzbuzz = []
    for(let i = 1; i <= self.startStop()[1]; i++) {
      if(i % 5 === 0 && i % 3 === 0) {
        fizzbuzz.push('FizzBuzz')
      } else {
        fizzbuzz.push(i)
      }
    }
    return fizzbuzz
  },
  getFizz: (i) => {
    return self.printFizz()[i-1]
  },
  getFuzz: (i) => {
    return self.printBuzz()[i-1]
  },
  getFizzBuzz: (i) => {
    return self.printFizzBuzz()[i-1]
  }
}

module.exports = self
