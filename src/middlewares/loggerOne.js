const loggerOne = (request, response, next) => {
    // console.log("Log 1");
    console.log(request.originalUrl);
    next();
}

module.exports = loggerOne;