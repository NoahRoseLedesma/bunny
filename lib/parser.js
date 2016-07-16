const fs = require('fs')
const handle = require('./handle.js')

module.exports = {
  parseFile : function(filename){
    file = fs.readFileSync(filename)
    file = file.toString().split(/[\n;]/)
    for(line in file){
      file[line] = file[line].replace('\r', '')
    }
    return file
  },
  parseLine : function(line, index, modules) {
    if(typeof modules != 'object'){
      handle.throw('Parsing Error: Error loading language operations', ['Internal'], 0)
      return;
    }
    if(line === '') {
      return false
    }
    moduleNames = Object.keys(modules)
    for(key in moduleNames) {
      if(line.indexOf(modules[moduleNames[key]].keyword) == 0) {
        line = line.replace(modules[moduleNames[key]].keyword, '').split(' ')
        line.unshift(modules[moduleNames[key]].operation_id)
        return line
      }
    }
    handle.throw('Parsing Error: No operation suits statement', index, 0);
  },
  preview: function(program){
    var hops = {}
    for(line in program) {
      if(program[line].trim().indexOf('@') == 0){
        hops[program[line].replace('@', '').split(' ')[0]] = line
      }
    }
    return hops
  }
}
