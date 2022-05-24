const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// PORT
const HTTP_PORT = 8080;
const HTTPS_PORT = 443;

// HTTPS OPTIONS
const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.dongminhttpstest.cf/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.dongminhttpstest.cf/cert.pem', 'utf8'),
  ca: fs.readFileSync('/etc/letsencrypt/live/www.dongminhttpstest.cf/chain.pem', 'utf8'),
};

const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api', (req, res) => {
  console.log(req.secure);
  if (req.secure) {
    res.json({ secure: true });
  } else {
    res.json({ secure: false });
  }
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`Listening on ${HTTP_PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`Listening on ${HTTPS_PORT}`);
});
