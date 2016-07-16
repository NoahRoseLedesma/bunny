const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'point',
  description: 'Defines hop points',
  keyword : '@',
  max_arguments : 1,
  operation : function(location, id) {
    if(typeof id == undefined) {
      handle.throw('Hop Error. Cannot define a hop point without an id', location, 3)
    }
  }
};
