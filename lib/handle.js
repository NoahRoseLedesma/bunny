// Global handler
callbacks = {
  error: []
}
module.exports = {
  // 0-Error 1-Warning 2-Info
  throw : function(message, location, severity) {

    location = location || 'Unknown'

    switch (severity) {
      case 0:
        console.log('Fatal Error.')
        console.log(message)
        console.log(`@ ${location.toString().replace(',', ' , ')}`);
        for(error in callbacks.error) {
          callbacks.error[error]();
        }
        break;
      case 1:
          console.log(`Warning. ${message}`);
          console.log(`@ ${location.toString().replace(',', ' , ')}`);
        break;
      case 1:
          console.log(message);
          if(location !== 'Unknown') {
            console.log(`@ ${location.toString().replace(',', ' , ')}`);
          }
        break;
    }
  },
  on : function(what, callback){
    switch (what) {
      case 'error':
        callbacks.error.push(callback)
        break;
    }
  }
}
