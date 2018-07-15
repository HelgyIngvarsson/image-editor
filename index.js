const express = require('express');
const app = express();
const image = require('./server/Routes/image/index');

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/src`));
app.use(express.static(`${__dirname}/assets`));

app.use("/api",image);

app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});