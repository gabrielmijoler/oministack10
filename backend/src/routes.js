const {Router} = require('express');
const routes = Router();
const axios = require('axios'); //15.6k (gzipped: 5.3k)

routes.post('/devs', async (request, response) =>{ // async para espera o progrma reponder e await tbm
    const {github_username}= request.body;

    const apiresponse  = await axios.get(`http://api.github.com/users/${github_username}`);// esperar abrir  pag para continuar o progtr
    console.log(apiresponse.data);
    // continuar 
    return response.json({message: 'julios'});
});

module.exports = routes;