(function() {
    
  var marka = function(md) {
    return md.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>') // links
             .replace(/\*\*(.*?)\*\*|__(.*?)__/ig)
  };
  
  
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = marka;
  } else {
      window.marka = marka;
  }
})();