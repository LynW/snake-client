const net = require("net");
const { IP, PORT, CONNECTION_MSG, NAME, CLOSE_MSG } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(CONNECTION_MSG);
    conn.write(`Name: ${NAME} `);
    // setInterval(() => (conn.write("Move: down")), 100)
  });

  conn.on("data", (data) => {
    console.log(`Message: ${data}`);
  });

  conn.on("close", () => {
    console.log(CLOSE_MSG);
  })

  return conn;
};


module.exports = connect;