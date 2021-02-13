const { Client } = require("pg");

// const client = new Client({
//     host: "http://bluefoo.fr",
//     user: "viem0377",
//     database: "viem0377_argo",
//     password: "3r]Y2mJgU7ad",
//     port: 5432,
// });

// const client = new Client({
//     host:  process.env.PGHOST,
//     user:  process.env.PGUSER,
//     database:  process.env.PGDATABASE,
//     password:  process.env.PGPASSWORD,
//     port:  process.env.PGPORT,
// });

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;