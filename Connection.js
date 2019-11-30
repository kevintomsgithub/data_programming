const sql = require('mssql/msnodesqlv8');
var bodyParser = require('body-parser');
const config = {
    server: 'localhost',
    database: 'Playstore',
    port: 1433,
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};


const pool = new sql.ConnectionPool(config).connect().catch(err => {
    console.log('sql connection errors', err);
    return err;
});

exports.execSql = async function (sqlquery, callback) {
    var result = pool.then(pool => {
        var requet = new sql.Request(pool);
        return requet.query(sqlquery);
    }).then(result => {
    //console.dir(result.recordset);
        return callback(result.recordset);
    }).catch(err => {
      //  console.log('sql errors', err);
        return callback(err);
    });
};
