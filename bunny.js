const handle = require('./lib/handle.js')
const parser = require('./lib/parser.js')
const operations = require('./operations')

//console.log(operations)
code = parser.parseLine('#123', ['internal'], operations)
operations[code[0]].operation(1)
console.log(bunny_memory)
