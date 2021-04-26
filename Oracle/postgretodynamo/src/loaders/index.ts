import log from "../utils/winston";
import sequelizeAuthenticate from "./postgresLoader";
import postgresStarter from './postgresStarter';

function runLoaders () {

  //postgresStarter();
  //log.info("Database started");

  sequelizeAuthenticate();
  log.info("Sequelize authentication loaded");

}


export default runLoaders;
