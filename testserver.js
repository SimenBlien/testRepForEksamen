const Websocket = require("ws");
port = "8080"
const server = new Websocket.Server({port: port});

server.on("connection", socket => {
    socket.on("message", message => {
        msg = message.toString();
        console.log(msg)

        server.clients.forEach(client => {
            if (client !== socket) {
                client.send(msg);
            }
        })
    })
})
console.log(`Serveren har startet på port ${port}`)