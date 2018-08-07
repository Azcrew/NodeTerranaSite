const consign = require('consign')
const fs = require('fs');
// const http = require('http');
const https = require('https');
let app = require('./config/server')

const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/azcrew.ddns.net/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/azcrew.ddns.net/fullchain.pem', 'utf8')
}

// const httpServer = http.createServer(app).listen(80, () => {
// 	console.log('HTTP Express Server running')
// })
const httpsServer = https.createServer(credentials, app).listen(443, () => {
    console.log('HTTPS Express Server running')
})

let io = require('socket.io').listen(httpsServer)
consign().include('./app/socket').into(io)