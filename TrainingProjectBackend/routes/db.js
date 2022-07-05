const Pool = require("pg").Pool;

const pool = new Pool({
    "user":"postgres",
    "database":"Project",
    "password":"1234",
    "host":"locahost",
    "port":"5432",
}
);

module.exports = pool;