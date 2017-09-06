/**
 * Created by kjetilvaagen on 06/09/17.
 */


const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('../../index.html')
});

app.listen(8081, function () {
    console.log('Test')
});