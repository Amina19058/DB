import {execSync} from 'child_process';
import log from "../utils/winston";
import scriptConverter from "./scriptConverter";
import oracleLoader from "../loaders/oracleLoader";
//import oracleasd from "../loaders/oracleLoaderClass";

function scriptSeparator (param: string) {

  let buf;


  for (let line of param.split('\n')) {
    if (line.trim().startsWith('CREATE TABLE'))
      buf = [line];
    else if (buf) {
      buf.push(line);
      if (line.startsWith(');')) {
        return buf.join('\n');
      }
    }
  }
}


function scriptRetriever(){
  let script: string;
  let newScript: string;
  let separatedScript : string;

  let tableNames: string[] =
    ["actor", "address", "category",
    "city", "country", "customer",
    "film", "film_actor", "film_category",
    "inventory", "language", "payment",
    "rental", "staff", "store"];

  for(let entity of tableNames){
    script = execSync(
      `pg_dump -t ${entity} --schema-only dvdrental`, {encoding: 'utf-8'}).toString();

    separatedScript = scriptSeparator(script) as string;
    log.info(separatedScript);
    newScript = scriptConverter(separatedScript).slice(0);

    oracleLoader(newScript);
  }


}

export default scriptRetriever;
