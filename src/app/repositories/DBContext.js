const InputParam = require("./InputParam");
const OutputParam = require("./OutputParam");
const Connection = require("tedious").Connection;
const Request = require("tedious").Request;

/**
 * 
 * @param {string} sql 
 * @param {InputParam[]} params 
 * @param {OutputParam[]} outParams 
 * @returns 
 */
function execSql(sql, params, outParams) {
  return new Promise(function (resolve, reject) {
    const config = {
      server: "localhost",
      authentication: {
        type: "default",
        options: {
          userName: "sa",
          password: "sa",
        },
      },
      options: {
        database: "f8_education_dev",
        encrypt: true,
        trustServerCertificate: true,
        rowCollectionOnDone: true,
      },
    };

    const connection = new Connection(config);

    connection.on("connect", (err) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(createRequest(sql, params, outParams, connection));
      }
    });

    connection.connect();
  });
}

/**
 * 
 * @param {String} sql 
 * @param {InputParam[]} params 
 * @param {OutputParam[]} outParams 
 * @param {Connection} connection 
 * @returns {Promise<any>}
 */
function createRequest(sql, params, outParams, connection) {
  return new Promise((resolve, reject) => {
    const modelReturnArray = [];
    const request = new Request(sql, (err, rowCount) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`${rowCount} rows`);
      }
      connection.close();
    });

    // Add params
    if (params) {
      for (let eachParam of params) {
        request.addParameter(eachParam.name, eachParam.type, eachParam.value);
      }
    }
    // Add output params
    if (outParams) {
      for (let eachParam of outParams) {
        request.addOutputParameter(eachParam.name, eachParam.type);
      }
    }

    request.on("doneInProc", (rowCount, more, rows) => {
      // xử lý bản ghi tại đây
      for (let row of rows) {
        let modelReturn = {};
        for (let col of row) {
          modelReturn[col.metadata.colName] = col.value;
        }
        modelReturnArray.push(modelReturn);
        resolve(modelReturnArray);
      }
    });

    connection.execSql(request);
  });
}

module.exports = { execSql };
