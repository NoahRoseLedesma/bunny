const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'memory',
  description: 'Creates virtural memory',
  keyword : '#',
  max_arguments : 1,
  operation : function(size, location) {
    if(size != undefined && size > 0) {
      global.bunny_memory = Array(Number(size))
    } else {
      handle.throw(`Memory Error. Cannot initialize memory with value of ${size}`, location, 0)
    }
  }
};
