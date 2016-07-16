const handle = require('../lib/handle.js')

module.exports = {
  operation_id: 'memory',
  description: 'Creates virtural memory',
  keyword : '#',
  max_arguments : 1,
  operation : function(location, size) {
    if(size != undefined && size > 0) {
      global.bunny_memory = new Array()
      global.bunny_maxmemory = size
    } else {
      handle.throw(`Memory Error. Cannot initialize memory with value of ${size}`, location, 0)
    }
  }
};
