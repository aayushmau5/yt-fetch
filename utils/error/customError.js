/*
Custom error codes:

E101 => Internal server error, 500
E102 => Validation Error, 422
E103 => Page not found, 404
*/

class CustomError extends Error {
  constructor(message, code, httpResponseCode) {
    super();
    this.message = message;
    this.code = code;
    this.httpResponseCode = httpResponseCode;
  }

  static ValidationError(message) {
    return new CustomError(message, "E102", 422);
  }

  static PageNotFound() {
    return new CustomError("Page not found", "E103", 404);
  }
}

module.exports = CustomError;
