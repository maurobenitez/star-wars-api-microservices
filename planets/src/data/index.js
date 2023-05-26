const axios = require("axios");

module.exports = {
    list: async ()=>{
        var {data} = await axios.get("http://database:8004/Planet");
        return data;
    },
    get: async (id)=>{
        var {data} = await axios.get(`http://database:8004/Planet/${id}`);
        return data;
    },
    create: async () => {
        throw Error("Hay un error en la BDD al momento de crear el personaje");
    }
}