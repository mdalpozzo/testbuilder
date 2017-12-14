describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011345678901234890').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + 'and a length of 16', function() {
        detectNetwork(prefix + '1234567890123').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + 'and a length of 19', function() {
        detectNetwork(prefix + '1234567890123456').should.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6512345678901234').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6512345678901234567').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();

  for (var length = 12; length <= 19; length++) {

    (function(length) {
      var padding = Array(length - 4 + 1).join('1');
        
      it('has a prefix of 5018 and a length of ' + length, function() {
        detectNetwork('5018' + padding).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + length, function() {
        detectNetwork('5020' + padding).should.equal('Maestro');
      })
      it('has a prefix of 5038 and a length of ' + length, function() {
        detectNetwork('5038' + padding).should.equal('Maestro');
      })
      it('has a prefix of 6304 and a length of ' + length, function() {
        detectNetwork('6304' + padding).should.equal('Maestro');
      })
    })(length)
  }
});

describe('China UnionPay', function() {
  var should = chai.should();

  for (var length = 16; length <= 19; length++) {
    for (var prefix = 622126; prefix <= 622925; prefix++) {
      (function(length, prefix) {
        var padding = Array(length - 6 + 1).join('1');

        it('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(prefix + padding).should.equal('China UnionPay');
        }
      })(length, prefix)
    }
  }

  for (var length = 16; length <= 19; length++) {
    for (var prefix = 624; prefix <= 626; prefix++) {
      (function(length, prefix) {
        var padding = Array(length - 3 + 1).join('1');

        it('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(prefix + padding).should.equal('China UnionPay');
        }
      })(length, prefix)
    }
  }

  for (var length = 16; length <= 19; length++) {
    for (var prefix = 6282; prefix <= 6288; prefix++) {
      (function(length, prefix) {
        var padding = Array(length - 4 + 1).join('1');

        it('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(prefix + padding).should.equal('China UnionPay');
        }
      })(length, prefix)
    }
  }

});


describe('Switch', function() {
  var should = chai.should();
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var lengths = [16, 18, 19];

  for (i = 0; i < prefixes.length; i++) {
    for (j = 0; j < lengths.length; j++) {
      (function(prefix, length) {
        var padding = Array(length - prefix.length + 1).join('1');

        it('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(prefix + padding).should.equal('Switch');
        }
      })(prefixes[i], lengths[j])
    }
  }
});
