// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
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
    //create result array
    var result = [];
    //iterate through keys
    for (var key in obj) {
      if(obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      result.push('' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + '');
    }
    //join the result array
    result.join(',');
    return '{' + result + '}';
  }
};
