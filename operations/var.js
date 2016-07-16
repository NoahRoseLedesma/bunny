const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'var',
  description: 'Variable operations',
  keyword : '$',
  max_arguments : 3,
  operation : function(location, variable, operation, peram) {
    // TODO: Allow literal into hand
    if(bunny_memory == undefined){
      handle.throw('Variable Operation Error: Cannot manipulate uninitiated memory', location, 0)
      return;
      }
    switch (operation) {
      case '<-':
        peram = peram || bunny_hand

        if(peram == undefined){
          handle.throw('Variable Operation Error: Cannot assign with no peramater and empty hands', location, 0);
          return;
        }
        bunny_memory[variable] = peram
        if(bunny_memory.length > bunny_maxmemory) {
          handle.throw('Memory overflow.', location, 0);
        }
        break;
      case '->':
        if(bunny_memory[variable] == undefined) {
          handle.throw('Variable Operation Error: Cannot copy from undefined variable', location, 0);
          return;
        }
        bunny_hand = bunny_memory[variable]
        break;
      default:
        handle.throw(`Variable Operation Error: Unknown variable operator '${operation}''`, location, 0);
    }
  }
};
