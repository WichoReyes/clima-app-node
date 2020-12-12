const axios = require('axios');


const getClima = async(lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a20b5b00a2d0230b0ba1648bd209e809&units=metric`)

    return res.data.main.temp;
}




module.exports = {
    getClima
}