const client = require('./database');

const dataMapper = {
    async getAllArgonautes () {
        const result = await client.query('SELECT * FROM "argonautes"');
        return result.rows;
    },

    async addNewArgonaute (newArgonaute) {
        const result = await client.query(`INSERT INTO "argonautes" ("name") VALUES ($1)`, [newArgonaute]);
        return result.rows[0];
    }
}

module.exports = dataMapper;