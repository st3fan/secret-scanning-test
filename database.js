const db = require("knex")({
  client: "pg",
  connection: {
    host: "db-postgresql-nyc3-112233-hypeshape-do-user-112233-0.b.db.ondigitalocean.com",
    port: 25060,
    user: "hype",
    password: "AVNS_hytghytghyhjuyhgvfg",
    database: "pagila",
    ssl: { rejectUnauthorized: false },
    sslmode: "require",
  },
});

db.raw("SELECT 1")
  .then(() => {
    console.log("PostgreSQL connected");
  })
  .catch((e) => {
    console.log("PostgreSQL not connected");
    console.error(e);
  });

module.exports = db;
