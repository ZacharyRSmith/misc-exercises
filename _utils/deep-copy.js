module.exports = function deepCopy(arg) {
  var copy, props;

  if (arg instanceof Object) {
    copy = new arg.constructor(); // This would return exactly what is expected?
//     copy = Object.create(Object.getPrototypeOf(arg), arg);

    props = Object.getOwnPropertyNames(arg);

    props.forEach(function (prop) {
            copy[prop] = deepCopy(arg[prop]);
    });

    return copy;
  }
  else { return arg; }
};
