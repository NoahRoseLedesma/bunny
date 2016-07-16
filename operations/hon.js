const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'hon',
  description: 'Hop if negative',
  keyword : 'hon',
  max_arguments : 1,
  operation : function(location, id) {
    if(typeof id == undefined) {
      handle.throw('Hop Error. Cannot hop without destination', location, 3)
      return;
    }
  }
};
