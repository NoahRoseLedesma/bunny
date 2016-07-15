const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'var',
  description: 'Variable operations',
  keyword : '$',
  max_arguments : 3,
  operation : function(variable, operation, peram) {
    if(bunny_memory == undefined){
      handle.throw('Variable Operation Error: Cannot manipulate uninitiated memory')
      return;
    }
    switch (operation) {
      case '<-':
        if(bunny_hand == undefined){
          handle.throw('Variable Operation Error: Cannot assign ' + variable + ' with empty hands!');
        }
        break;
      default:

    }
  }
};
