function ValidateQueryParam(paramName, param) {
  if (typeof param !== "number") {
    const paramInNumber = Number(param);
    if (Number.isNaN(paramInNumber)) {
      throw new Error(`Invalid parameter: ${paramName}`); // throw custom error
    }
    return paramInNumber;
  }
  return param;
}

module.exports = { ValidateQueryParam };
