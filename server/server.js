const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const companies = require('./routes/companies.router.js');
const messageTemplates = require('./routes/messageTemplates.router.js');
const guests = require('./routes/guests.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/companies', companies);
app.use('/message-templates', messageTemplates);
app.use('/guests', guests);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});