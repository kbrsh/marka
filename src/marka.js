(function() {
    
  var marka = function(md) {
    return md.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>') // links
             .replace(/\*\*(.*?)\*\*/ig, '<strong>$1</strong>') // bold
             .replace(/__(.*?)__/ig, "<strong>$1</strong>") //bold
             .replace(/\*(.*?)\*/ig, '<em>$1</em>') // italics
             .replace(/_(.*?)_/ig, "<em>$1</em>") // italics
             .replace(/^\s*#\s+(.*?$)/ig, "<h1>$1</h1>") // h1
             .replace(/^\s*##\s+(.*?$)/ig, "<h2>$1</h2>") // h2
             .replace(/^\s*###\s+(.*?$)/ig, "<h3>$1</h3>") // h3
             .replace(/^\s*####\s+(.*?$)/ig, "<h4>$1</h4>") // h4
             .replace(/^\s*#####\s+(.*?$)/ig, "<h5>$1</h5>") // h5
             .replace(/^\s*######\s+(.*?$)/ig, "<h6>$1</h6>") // h6
  };
  
  
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = marka;
  } else {
      window.marka = marka;
  }
})();