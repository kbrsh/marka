(function() {
    
  var marka = function(md) {
    return md.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>') // links
             .replace(/\*\*(.*?)\*\*/ig, '<strong>$1</strong>') // bold
             .replace(/__(.*?)__/ig, "<strong>$1</strong>") //bold
  };
  
  
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = marka;
  } else {
      window.marka = marka;
  }
})();