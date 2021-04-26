// import oracleDBConfig from "./oracleDBConfig";
// import * as oracledb from 'oracledb';
// import log from "../utils/winston";
//
// let error;
// let user;
//
//
// function oracleasd(sql: string) {
//
//   oracledb.getConnection(
//     {
//       user: "ADMIN",
//       password: "Gorodetsky228$",
//       connectString: 'db202104251656_high = (description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.eu-zurich-1.oraclecloud.com))(connect_data=(service_name=gfe16dcf9b60e27_db202104251656_high.adb.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adb.eu-zurich-1.oraclecloud.com,OU=Oracle ADB ZURICH,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))'
//     },
//     async function (err, connection) {
//       if (err) {
//         error = err;
//         return;
//       }
//       try{
//         const output = await connection.execute(sql);
//         log.info("Table created with data." + output);
//       } catch (e) {
//         log.error("SQL script do not executed!" + e);
//       }
//     }
//   );
// }
//
// export default oracleasd;
