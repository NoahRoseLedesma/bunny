const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'out',
  description: 'Outputs hand',
  keyword : 'out',
  max_arguments : 0,
  operation : function(location) {
    if(global.bunny_hand == undefined) {
      handle.throw('Out Error: Cannot out with nothing in hand', location, 3)
      return;
    }
    console.log(global.bunny_hand)
  }
};
