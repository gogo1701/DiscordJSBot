const { testServer, devs } = require("../../../config.json");
const getLocalCommand = require("../../utils/getLocalCommands");

module.exports = (client) => {
  const localCommands = getLocalCommand();
};
