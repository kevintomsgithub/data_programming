var DBConn = require(__dirname + '\\Connection.js')
var sqlquery = "SELECT TOP (1000) * FROM [Playstore].[dbo].[Data] "
DBConn.execSql(sqlquery, function (res) {

console.log(res);
  });
