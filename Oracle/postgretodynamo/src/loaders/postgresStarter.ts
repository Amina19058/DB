import {execSync} from "child_process";
import log from '../utils/winston';

function postgresStarter () {
  try {
    execSync(
      'pg_ctl -D /usr/local/var/postgres start',
      {encoding: 'utf-8'});
  } catch (e) {
    try{
      execSync(
        'sudo kill 67',
        {encoding: 'utf-8'});

      execSync(
        '1cherepaxa',
        {encoding: 'utf-8'});

      execSync(
        'pg_ctl -D /usr/local/var/postgres start',
        {encoding: 'utf-8'});
    } catch (e) {
      log.error(e);
    }

    log.error(e);

  }
}

export default postgresStarter;
