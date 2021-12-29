const CustomError = require("./customError");

function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    res.status(err.httpResponseCode).json({
      message: err.message,
      code: err.code,
    });
    return;
  }

  res.status(500).json({
    message: err.message,
    code: "E101",
  });

  // log the error messages as well
}

module.exports = errorHandler;
