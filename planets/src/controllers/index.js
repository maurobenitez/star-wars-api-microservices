const {catchedAsync} = require("../utils")

module.exports = {
    getplanets: catchedAsync(require("./getPlanets")),
    getplanet: catchedAsync(require("./getPlanet")),
    createplanet: catchedAsync(require("./createPlanet")),
}