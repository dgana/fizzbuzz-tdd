const chai = require('chai')
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const should = require('chai').should()
const expect = require('chai').expect
const FizzBuzz = require('../fizzbuzz')

const numCollection = () => {
  let arr = []
  for(let i = 1; i <= 100; i++) {
    arr.push(i)
  }
  return arr
}

describe('Iterate from 1 to 100', () => {
  it('Start from number 1 and stop at 100', () => {
    expect(FizzBuzz.startStop()).to.be.equalTo([1,100]);
  })
  it('Return an array', () => {
    expect(FizzBuzz.startStop()).to.be.array();
  })
})

describe('Print number from 1 to 100', () => {
  it('Return an array', () => {
    expect(FizzBuzz.printNumber()).to.be.array();
  })
  it('Print number from 1 to 100', () => {
    expect(FizzBuzz.printNumber()).to.be.equalTo(numCollection());
  })
})

describe('If the number can be divided by 3, print "Fizz"', () => {
  it('Return an string', () => {
    expect(FizzBuzz.getFizz(6)).to.be.a('string');
  })
  it('Get a value', () => {
    expect(FizzBuzz.getFizz(3)).to.equal("Fizz");
  })
})

describe('If the number can be divided by 5, print "Fuzz"', () => {
  it('Return a string', () => {
    expect(FizzBuzz.getFuzz(5)).to.be.a('string');
  })
  it('Get a value', () => {
    expect(FizzBuzz.getFuzz(10)).to.equal("Buzz");
  })
})

describe('If the number can be divided by 5 and 3, print "FizzBuzz"', () => {
  it('Return a string', () => {
    expect(FizzBuzz.getFizzBuzz(15)).to.be.a('string');
  })
  it('Get a value', () => {
    expect(FizzBuzz.getFizzBuzz(30)).to.equal("FizzBuzz");
  })
})

console.log(FizzBuzz.getFuzz(30));
