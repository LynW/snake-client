const net = require("net");
const {IP, PORT, INITIALS, SUCCESS_MESSAGE} = require("./variables");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(SUCCESS_MESSAGE);
    conn.write(`Name: ${INITIALS} `);
    //conn.write("Move: up");
    
  });

  conn.on('data', (data) => {
    console.log("Message: " + data);
  });

  return conn;
};

module.exports = {connect};
