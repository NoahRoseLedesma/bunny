const fs = require('fs')
const handle = require('./handle.js')

module.exports = {
  parseFile : function(filename){
    fs.readFile(filename, function(err, file){
      if(err) throw err
      return file.toString().split(/[ ;]/, ';')
    })
  },
  parseLine : function(line, index, modules) {
    if(typeof modules != 'object'){
      handle.throw('Parsing Error: Error loading language operations', ['Internal'], 0)
      return;
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
  }
}
