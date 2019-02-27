const settings = require("./settings");
const pg = require("knex") ({
  client: 'pg',
  connection: {
    host     : settings.hostname,
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    ssl      : settings.ssl,
    port     : settings.port
  }
});

pg('famous_people').insert({
  first_name: process.argv[2],
  last_name: process.argv[3],
  birthdate: process.argv[4]
})
  .asCallback(function(err, rows) {
    if (err) throw err;
    pg.destroy();
  });