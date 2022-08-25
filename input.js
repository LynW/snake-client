let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
  }

  if(key === "1") {
    console.log(key);
    connection.write(`Say: Hello`);
  } else if (key === "2") {
    console.log(key);
    connection.write(`Say: Beep beep`);
  } else if (key === "3") {
    console.log(key);
    connection.write(`Say: Watch out`);
  } else if (key === "4") {
    console.log(key);
    connection.write(`Say: Heck`);
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