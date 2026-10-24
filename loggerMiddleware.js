//* Student Name: Dominick Sonthipanya
//* Student ID: 1225689582
//* Date: 10/23/2026
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

module.exports = loggerMiddleware;
