const dataMapper = require("../dataMapper");

const mainController = {
    async home(_, response, next) {
        try {
            const argonautes = await dataMapper.getAllArgonautes();
            response.render('index', {argonautes});
        } catch (error) {
            next(error);
        }
    },

    async input(request, response, next) {
        try {
            const newArgonaute = request.body.name;
            const argonaute = await dataMapper.addNewArgonaute(newArgonaute);

            response.redirect("/");
        }catch (error) {
            next(error);
        }
    },
};

module.exports = mainController;