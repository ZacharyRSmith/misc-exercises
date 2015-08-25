var deepCopyFxn = require('../deep_copy').deepCopy;


// These tests are as much an exploration of JS's equality/comparisons
// as it is a test of deepCopyFxn().
describe('deepCopyFxn()', function () {
  it("returns strings", function () {
    expect(deepCopyFxn('foo')).toEqual('foo');
  });

  it("returns integers", function () {
    expect(deepCopyFxn(123)).toEqual(123);
  });

  it("returns copies of simple arrays", function () {
    var simpleAry = [123, 'foo'];

    var deepCopy = deepCopyFxn(simpleAry);
    expect(deepCopy[0]).toEqual(simpleAry[0]);
    expect(deepCopy[1]).toEqual(simpleAry[1]);
    expect(deepCopy === simpleAry).toEqual(false);
    expect(deepCopy !== simpleAry).toEqual(true);

    // The below 3 lines are to compare/contrast 'deepCopyFxn()':
    var refCopy = simpleAry;
    expect(refCopy === simpleAry).toEqual(true);
    expect(refCopy !== simpleAry).toEqual(false);
  });

  it("returns copies of simple objects", function () {
    var simpleObj = { 'foo': 'bar', 1: 123 };

    var deepCopy = deepCopyFxn(simpleObj);
    expect(deepCopy.constructor).toEqual(simpleObj.constructor);
    expect(deepCopy.foo).toEqual(simpleObj.foo);
    expect(deepCopy[1]).toEqual(simpleObj[1]);
    expect(deepCopy === simpleObj).toEqual(false);
    expect(deepCopy !== simpleObj).toEqual(true);

    var refCopy = simpleObj;
    expect(refCopy === simpleObj).toEqual(true);
    expect(refCopy !== simpleObj).toEqual(false);
  });

  it("returns copies of complex objects", function () {
    var simpleObj = { 'foo': 'bar', 1: 123 };
    var str = "an";
    var obj = { here: { is: str },
                array: ['ok?', 123, simpleObj] };

    var deepCopy = deepCopyFxn(obj);
    expect(deepCopy === obj).toEqual(false);
    expect(deepCopy !== obj).toEqual(true);

    var refCopy = obj;
    expect(refCopy === obj).toEqual(true);
    expect(refCopy !== obj).toEqual(false);
  });

  it("returns copies that do not reference what was copied", function () {
    var obj = {
      'grade4': ["Christopher"],
      'grade6': ["Kareem"]
    };

    var deepCopy = deepCopyFxn(obj);
    var refCopy = obj;

    expect(deepCopy).toEqual(obj);
    deepCopy.grade4.push("John");
    expect(deepCopy).not.toEqual(obj);

    expect(refCopy).toEqual(obj);
    refCopy.grade4.push("John");
    expect(refCopy).toEqual(obj);
  });

  it("returns an Array as an Array instead of an Object", function () {
    var ary = ['A', 'B', 'C'],
        obj = { 0: 'A', 1: 'B', 2: 'C' };
    var copyAry = deepCopyFxn(ary),
        copyObj = deepCopyFxn(obj);

    expect(Array.isArray(copyAry)).toBe(true);
    expect(Array.isArray(copyObj)).toBe(false);

    expect(copyAry.constructor).not.toBe(Object);
    expect(copyAry.constructor).toBe(Array);
    expect(copyObj.constructor).not.toBe(Array);
    expect(copyObj.constructor).toBe(Object);

    expect(copyAry instanceof Array).toBe(true);
    expect(copyObj instanceof Array).toBe(false);

    // Both 'copyAry' and regular Arrays have object-like assignments...
    var newAry = ['A', 'B', 'C'];
    newAry.foo = 'bar';
    expect(newAry.foo).toBe('bar');
    console.log("newAry: ", newAry);

    copyAry.foo = 'bar';
    expect(copyAry.foo).toBe('bar');
    console.log("copyAry: ", copyAry);

    // ...and the "in" operator?
    expect('foo' in newAry).toBe(true);

    // casting to string:
    expect(newAry + '').toBe("A,B,C");

    // What about those awesome Array.prototype functions?
    expect(copyAry.forEach instanceof Function).toBe(true);
    expect(copyObj.forEach instanceof Function).toBe(false);
    expect(copyObj.forEach).toBe(undefined);

    // Only enumerable properties are read by Array.prototype functions.
    // Ie, 'copyAry.foo' will not be read:
    var expected = ['A', 'B', 'C'];
    var res = copyAry.filter(function (elt) {
      return true;
    });

    expect(res).toEqual(expected);
  });
});
