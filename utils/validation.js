const CustomError = require("./error/customError");

function ValidateQueryParam(paramName, param) {
  if (typeof param !== "number") {
    const paramInNumber = Number(param);
    if (Number.isNaN(paramInNumber)) {
      throw CustomError.ValidationError(`Invalid parameter: ${paramName}`);
    }
    return paramInNumber;
  }
  return param;
}

module.exports = { ValidateQueryParam };
