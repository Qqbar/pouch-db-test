import PouchDB from 'pouchdb';
require('pouchdb-all-dbs')(PouchDB);

export function listAllDBs() {
  console.log("LIST ALL DATABASES");
  PouchDB.allDbs().then(function (dbs) {
    console.log(dbs);
  }).catch(function (err) {
    console.log(err);
  });
}

export function getAllPouchDBs() {
  return PouchDB.allDbs();
}

export function createPouchDB(dbName) {
  var db = new PouchDB(dbName)
  return db.info();
}
