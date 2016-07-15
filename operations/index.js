fs = require('fs')

files = fs.readdirSync('./operations/')
operations = []

for(file in files){
  if(files[file] != 'index.js') {
    operations.push(require(`./${files[file]}`))
  }
}

for(operation in operations) {
  exports[operations[operation].operation_id] = operations[operation]
}
