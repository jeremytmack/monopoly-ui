const io = require("socket.io")();

io.on("connection", client => {
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    client.emit("timer", interval);
  });

  client.on("rolled", val => {
    client.emit("roller", { diceRoll: val });
    console.log("dice rolled", val);
  });

  console.log("UI CONNECTED");
});

const port = 8000;
io.listen(port);
console.log("listening on port ", port);
