// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

let path = require('path');
let embedToken = require(__dirname + '/embedConfigService.js');
const utils = require(__dirname + "/utils.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let cors = require('cors');
app.use(cors())
let html_to_pdf = require('html-pdf-node');
// Prepare server for Bootstrap, jQuery and PowerBI files
app.use('/js', express.static('./node_modules/bootstrap/dist/js/')); // Redirect bootstrap JS
app.use('/js', express.static('./node_modules/jquery/dist/')); // Redirect JS jQuery
app.use('/js', express.static('./node_modules/powerbi-client/dist/')) // Redirect JS PowerBI
app.use('/css', express.static('./node_modules/bootstrap/dist/css/')); // Redirect CSS bootstrap
app.use('/public', express.static('./public/')); // Use custom JS and CSS files
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5300;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

app.get('/template', function (req, res) {
    res.sendFile(path.join(__dirname + '/../templates/index.html'));
});

app.get('/report', function(req,res){
    

    const puppeteer = require('puppeteer');

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:5300/template', {
        waitUntil: 'networkidle2',
      });
      await page.waitFor(20000);
      await page.screenshot({ path: 'example.png' });
      await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/'});
      console.log('download');
      await browser.close();
      res.setHeader('Content-type', 'image/png');
      res.download('example.png'); // Set disposition and send it.
    })();
});

app.get('/getEmbedToken', async function (req, res) {

    // Validate whether all the required configurations are provided in config.json
    configCheckResult = utils.validateConfig();
    if (configCheckResult) {
        return {
            "status": 400,
            "error": configCheckResult
        };
    }
    // Get the details like Embed URL, Access token and Expiry
    let result = await embedToken.getEmbedInfo();

    // result.status specified the statusCode that will be sent along with the result object
    res.status(result.status).send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));