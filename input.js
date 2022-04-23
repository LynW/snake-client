const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, CTRL_C, messages} = require("./variables");


let connection;


const handleUserInput = function(key) {
  if (key === CTRL_C) {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (messages[key]) {
    console.log(key);
    connection.write(`Say: ${messages[key]}`);
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