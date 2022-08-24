// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",// IP address here,
    port: "50541",// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected!");
  });

  conn.on("data", (data) => {
    console.log("Message: " + data);
  });

  conn.on("close", () => {
    console.log("Closed connection!");
  })

  return conn;
};

module.exports =  connect;