var Newdb = require('../lib/datastore.js')
  , db = new Newdb({ filename: 'workspace/lac.db' })
  ;

db.loadDatabase();
