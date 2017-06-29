const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return an appropriate response depending on a given number', function() {
    // range of normal inputs
    
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 25, expected: 'buzz'},
      {a: 9, expected: 'fizz'},
      {a: 2, expected: 2}
    ];

    // for each set of inputs (a) `fizzBuzzer` should
    // produce the expected value

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});