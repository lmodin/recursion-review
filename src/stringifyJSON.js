// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //if string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    //if null
    return 'null';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    //create an empty string
    var result = [];
    //iterate through array
    for (var i = 0; i < obj.length; i++) {
    //add values to result array
      result.push(stringifyJSON(obj[i]));
    }
    result.join(',');
    return '[' + result + ']';
  } else if (typeof obj !== 'object') {
    return '' + obj + '';
  } else {
    //else (to cath object literals)

  }
};
