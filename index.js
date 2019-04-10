require("dotenv").config();
var connect = require("connect");
var serveStatic = require("serve-static");
connect()
  .use(serveStatic(__dirname))
  .listen(process.env.PORT || 8000, function() {
    console.log(`Server running on ${process.env.PORT || 8000}...`);
  });
