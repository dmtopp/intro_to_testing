var chai = require('chai'); // requires the chai bdd library.  What is bdd?  Behavior-driven development.
var expect = chai.expect;   // requires the expect chai library
var db = db || {};          // a mock database object
// ^ this is called namespacing

describe('How BDD testing should work for newbies', function(){

  // callbacks contain tests
  // IT is a test
  it('should have a passing grade in mocha', function(){
    var grade = 9; // 8 out of 10 to pass
    expect(grade).to.be.above(7);
  })


});
