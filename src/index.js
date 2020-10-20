module.exports = function reverse (n) {
  return n > 0 ? +String(n).split('').reverse().join('') : +String(n).substr(1).split('').reverse().join('');
}
