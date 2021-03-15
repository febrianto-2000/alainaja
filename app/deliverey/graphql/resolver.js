const homeService = require("../../services/homeService");

const resolvers = {
  Query: {
    fetchUser: async () => {
      return homeService.fetchUser();
    },
    checkNumber: (_, arg) => {
      return homeService.checkNumber(arg.number);
    },
  },
};

module.exports = resolvers;
