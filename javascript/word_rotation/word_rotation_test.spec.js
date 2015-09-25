var isWordRotation = require('./word_rotation');

describe('isWordRotation\'s return value with candidates for "apple"', function() {
  it('should return true for "apple"', function() {
    expect(isWordRotation("apple", "apple")).toBe(true);
  });

  it('should return true for "pplea"', function() {
    expect(isWordRotation("pplea", "apple")).toBe(true);
  });

  it('should return true for "pleap"', function() {
    expect(isWordRotation("pleap", "apple")).toBe(true);
  });

  it('should return false for "paple"', function() {
    expect(isWordRotation("paple", "apple")).toBe(false);
  });

  it('should return false for "elppa"', function() {
    expect(isWordRotation("elppa", "apple")).toBe(false);
  });
});
