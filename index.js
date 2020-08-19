const  express = require ('express');
const { request, response } = require('express');

const app = express()

app.get('/',(request, response)=>{
    return response.send('quente')
});
app.listen(3333);