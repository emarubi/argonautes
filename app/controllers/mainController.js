const dataMapper = require("../dataMapper");

const mainController = {
    home: (request, response) => {
        dataMapper.getAllArgonautes((error, results) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.render('index', {argonautes: results.rows});
        })
    }
};

module.exports = mainController;