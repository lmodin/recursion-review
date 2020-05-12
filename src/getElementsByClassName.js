// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  //recursive function
  function getClassName(element) {
    //if exists, push to result
    if (element.classList && element.className.indexOf(className) > -1) {
      result.push(element);
    }
    //check if childNodes
    if (element.childNodes) {
      //if true, iterate values recursively
      var values = Object.values(element.children);
      for (var i = 0; i < values.length; i++) {
        getClassName(values[i]);
      }
    }
  }
  //invokes recursive function
  getClassName(document.body);

  return result;
};
