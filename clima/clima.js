const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=68f231d34ae593d53fc1029ce0215f1a&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}