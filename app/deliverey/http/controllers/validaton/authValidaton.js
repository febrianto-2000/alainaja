const { body } = require("express-validator");

const exampleValidation = (exampleModel) => {
  return [
    body("username").not().isEmpty().isEmail(),
    body("password").not().isEmpty(),
  ];
};

module.exports = {
  exampleValidation,
};

