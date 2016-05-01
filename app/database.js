const database = new localStorageDB('zonextrema', localStorage);

if( database.isNew() ) {
    database.createTable('activities',
    [
      'UserId',
      'KindId',
      'description',
      'secret',
      'loggedAt',
      'Kind',
      'token'
    ]);

    database.commit();
}

window.database = database;

export default database;
