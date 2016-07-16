const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'hoz',
  description: 'Hop if zero',
  keyword : 'hoz',
  max_arguments : 1,
  operation : function(location, id) {
    if(typeof id == undefined) {
      handle.throw('Hop Error. Cannot hop without destination', location, 3)
      return;
    }
  }
};
