const { UP, DOWN, LEFT, RIGHT, messages} = require("./constants");

let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === UP) {
    connection.write("Move: up");
  } else if (key === DOWN) {
    connection.write("Move: down");
  } else if (key === LEFT) {
    connection.write("Move: left");
  } else if (key === RIGHT) {
    connection.write("Move: right");
  }

  if(messages[key]) {
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

module.exports = setupInput;