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

pg.select('*').from('famous_people').where('first_name', process.argv[2]).orWhere('last_name', process.argv[2])
    .asCallback(function(err, rows) {
      if (err) throw err;
      console.log(rows);
      pg.destroy();
    });