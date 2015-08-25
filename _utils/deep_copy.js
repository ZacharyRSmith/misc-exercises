function deepCopy (arg) {
  var copy, props;

  if (arg instanceof Object) {
    copy = new arg.constructor();
    props = Object.getOwnPropertyNames(arg);

    props.forEach(function (prop) {
            copy[prop] = deepCopy(arg[prop]);
    });

    return copy;
  }
  else
		return arg;
};

module.exports.deepCopy = deepCopy;
