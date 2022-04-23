const { connect } = require("./client");
const { setupInput } = require("./input");
const { CONNECTING_MESSAGE } = require("./variables");

console.log(CONNECTING_MESSAGE);

console.log(connect, setupInput);

const connection = connect();
setupInput(connection);