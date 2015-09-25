function isWordRotation(candidate, word) {
  for (var i = 0; i < candidate.length; i++) {
    if (candidate === word) {
      return true;
    }
    candidate = candidate.slice(1) + candidate.slice(0, 1);
  }
  return false;
}

module.exports = isWordRotation;
