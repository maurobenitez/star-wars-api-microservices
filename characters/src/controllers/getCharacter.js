const Character = require("../data");

module.exports = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const characters = await Character.get(id);
    res.status(200).send(characters);
}