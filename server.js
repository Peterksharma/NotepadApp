const express = require('express');

//import the routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express ();

//Port Settings
const PORT = process.env.PORT || 3001;


app.use(express.static('public'));
//Parsing incoming data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//require the routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Listener
app.listen(PORT, () => {
    console.log(`API server is listo on port ${PORT}.`);
})

