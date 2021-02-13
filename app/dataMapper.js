const client = require('./database');

const dataMapper = {
    getAllArgonautes: callback => {
        client.query('SELECT * FROM "argonautes"', callback)
    },
}

module.exports = dataMapper;