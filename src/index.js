const express = require('express');

const app = express();

const projects = ['Desenvolvimento Web', 'Dsenvolvimento Mobile'];

app.get('/',(request , response) => {
  response.send(projects)
});




app.listen(3333);