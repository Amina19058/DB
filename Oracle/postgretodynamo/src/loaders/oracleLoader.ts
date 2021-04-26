const oracledb = require('oracledb');
import log from "../utils/winston";

import dbConfig from "./oracleDBConfig";

oracledb.initOracleClient({libDir: "/usr/local/var/instantclient_19_8/"});

async function oracleLoader(sql: string) {

  let connection;
  try {
    let getConfig = dbConfig();
    connection = await oracledb.getConnection(getConfig);
    const r = await connection.execute(sql);
    log.info(r);
    log.info("SQL statement was executed!");
  } catch (e) {
    log.error("SQL statement was not executed!" + e);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        log.error(err);
      }
    }
  }
}

export default oracleLoader;
