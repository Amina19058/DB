import { Sequelize } from 'sequelize';
import log from '../utils/winston';

const sequelizeAuthenticate = async (): Promise<void> => {

  log.info("Connection establishment");
  try {
    const connection = new Sequelize(
      'dvdrental',
      's1ngle',
      '1cherepaxa',
      {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        protocol: 'postgres',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
        dialectOptions: {},
        define: {
          timestamps: false
        }
      }
    );
    await connection.authenticate();
    log.info("Connected");
  } catch (e) {
    log.error("Unable to connect to PostgreSQL: " + e);
  }

};

export default sequelizeAuthenticate;
