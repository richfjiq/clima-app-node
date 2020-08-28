const axios = require("axios");

const getLugarLatLng = async(ciudad) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=1ece735450e1992f48e70f8c71617cef`
    );

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ciudad}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng,
    };
};

module.exports = { getLugarLatLng };