const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'bump',
  description: 'Manipulates numerical hand values',
  keyword : 'bump',
  max_arguments : 1,
  operation : function(location, operation) {
    if(global.bunny_hand == undefined) {
      handle.throw('Bump Error: Cannot bump with empty hands', location, 0)
      return;
    }
    if(isNaN(Number(bunny_hand))){
      handle.throw('Bump Error: Cannot bump non number', location, 0)
      return;
    }
    bunny_hand = Number(bunny_hand)
    switch (operation) {
      case '+':
        bunny_hand++;
        break;
      case '-':
        bunny_hand--;
        break;
      default:
        handle.throw(`Bump Error: Unkown bump operator ${operation}`);
        return;

    }
  }
};
