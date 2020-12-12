const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodedURL = encodeURI(direccion);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&appid=a20b5b00a2d0230b0ba1648bd209e809`)
    if (resp.data.cod === 400) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data;
    const ciudad = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    return {
        ciudad,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}