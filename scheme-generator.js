(function(length,rowSize,chunkSize) {
  var scheme=[],
    rand,
    createSchemeRow;

  rand = function() {
    var vals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "`"],
      valsLen = vals.length,
      chunk="";

    for(var chunkInd=0; chunkInd<chunkSize; chunkInd++) {
      chunk+=vals[Math.floor(Math.random() * valsLen)]
    }

    return chunk;
  };

  createSchemeRow = function() {
    var arr=[];

    for(var rowInd=0; rowInd<rowSize; rowInd++) {
      arr.push(rand());
    }

    return arr;
  };



  for(var i=0; i<length; i++) {
    scheme.push(createSchemeRow());
  }

  return scheme;
})(100,100,4);
