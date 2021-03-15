module.exports = (req, res, next) => {
  console.log("hi im from middleware");

  return next();
};
