const {catchedAsync} = require("../utils")

module.exports = {
    getfilms: catchedAsync(require("./getFilms")),
    getfilm: catchedAsync(require("./getFilm")),
    createfilm: catchedAsync(require("./createFilm")),
}