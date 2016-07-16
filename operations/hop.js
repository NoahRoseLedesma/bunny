const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'hop',
  description: 'Hop to a diffrent point in execution',
  keyword : 'hop',
  max_arguments : 1,
  operation : function(location, id) {
    if(typeof id == undefined) {
      handle.throw('Hop Error. Cannot hop without destination', location, 3)
      return;
    }
  }
};
