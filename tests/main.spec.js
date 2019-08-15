import { expect } from 'chai';
import  fizzBuzz  from '../src/main';

describe('Main', () => {
  it("should return Fizz when multiple of 3", () => {
    expect(fizzBuzz(3)).to.be.equal("Fizz")
  })  
  
  it("should return Buzz when multiple of 5", () => {
    expect(fizzBuzz(5)).to.be.equal("Buzz")
  })  

  it("should return FizzBuzz when multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).to.be.equal("FizzBuzz")
  })  
  
  it("should return the number when not multiple of 3 or 5", () => {
    expect(fizzBuzz(2)).to.be.equal(2)
  })  

  it("should return the 0 when passing 0", () => {
    expect(fizzBuzz(0)).to.be.equal(0)
  })  

});
