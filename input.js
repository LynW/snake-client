const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, CTRL_C, messages} = require("./variables");


let connection;


const handleUserInput = function(data) { 
  if (data === CTRL_C) {
    process.exit();
  } else if (data === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (data === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (data === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (data === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (messages[data]) {
    console.log(data);
    connection.write(`Say: ${messages[data]}`);
  }

};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  
  return stdin;
};



module.exports = {setupInput};