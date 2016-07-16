const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'sub',
  description: 'Subtract data in hand from variable in memory',
  keyword : 'sub',
  max_arguments : 1,
  operation : function(location, variable) {
    if(global.bunny_hand == undefined) {
      handle.throw('Add Error: Cannot add with nothing in hand', location, 3)
      return;
    }
    if(variable.indexOf('$') != 0) {
      handle.throw('Add Error. Cannot add to non variable', location, 3)
      return;
    }
    variable = variable.replace('$', '')
    if(global.bunny_memory[variable] == undefined) {
      handle.throw('Add Error. Cannot add to empty variable', location, 3)
      return
    }
    if(isNaN(Number(bunny_hand)) || isNaN(Number(bunny_memory[variable]))){
      handle.throw('Add Error: Cannot add non number', location, 0)
      return;
    }
    global.bunny_hand = Number(global.bunny_hand) - Number(global.bunny_memory[variable])
  }
};
