const lugar = require('./Lugar/lugar');
const clima = require('./Clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const tem = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ direccion } es de la temperatura ${ tem } `
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }

}

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log)

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);