const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

console.log(connect, setupInput);

const connection = connect()
setupInput(connection);