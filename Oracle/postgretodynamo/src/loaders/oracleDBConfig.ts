function oracleDBConfig() {
  return {
    user: "ADMIN",
    password: "Gorodetsky228$",
    host: "adb.eu-zurich-1.oraclecloud.com",
    port: 1522,
    connectString: '(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.eu-zurich-1.oraclecloud.com))(connect_data=(service_name=gfe16dcf9b60e27_db202104251656_high.adb.oraclecloud.com))(security=(MY_WALLET_DIRECTORY=/Users/daniil.sinelnik/IdeaProjects/postgretodynamo/oracleWallet)))',

  };
}

export default oracleDBConfig;
