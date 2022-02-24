const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Requiriendo rutas y guardandolas en constantes
const citasRoutes = require('./routes/citas.routes');
const localesRoutes = require('./routes/locales.routes');
const cortesRoutes = require('./routes/cortes.routes')
const clientesRoutes = require('./routes/clientes.routes')

const app = express();

app.use(cors());
// retorna respuestas de peticiones en consola
app.use(morgan('dev'));
// con esta linea express va a entender las peticiones con objetos json
app.use(express.json());

//Utilizando Rutas
app.use(citasRoutes);
app.use(localesRoutes);
app.use(cortesRoutes);
app.use(clientesRoutes);

app.use((err, req, res, next) =>{
    return res.json({
        message: err.message
    })
})

//
app.listen(4000)
console.log('server on port 4000')