(function(window) {
    
  var marka = function(md) {
    
  };


  
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = marka;
  } else {
      window.marka = function(md) {
        return new marka(md);
      };
  }
})(window);