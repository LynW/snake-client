const net = require("net");
const {IP, PORT} = require("./variables");

const connect = function() {

  console.log("BOP")

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: CW_");
    //conn.write("Move: up");
    
  });

  conn.on('data', (data) => {
    console.log("Message: "+ data);
  });

  return conn;
};

module.exports = {connect};
