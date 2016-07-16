const handle = require('./lib/handle.js')
const parser = require('./lib/parser.js')
const operations = require('./operations')

const fileinput = __dirname + '\\helloworld.bunny'

global.bunny_hand = undefined
global.bunny_memory = undefined

var errorFlagged = false;
handle.on('error', function(){
  errorFlagged = true;
})

var file = parser.parseFile(fileinput)
var hops = parser.preview(file);

for(var line = 0; line < file.length; line++){
  var code = parser.parseLine(file[line], [fileinput, line], operations)
  if(code === false) continue;
  if(!errorFlagged) {
  code = code.filter(function(v){return v!==''});
    var op = code.shift();
    code.unshift([fileinput, line]);
    operations[op].operation.apply(this, code)

    if(op == 'hoz') {
      line = (bunny_hand===0) ? hops[code[1]] : line
    }
    if(op == 'hop') {
      line = hops[code[1]]
    }
  } else {
    process.exit(1)
  }
}
