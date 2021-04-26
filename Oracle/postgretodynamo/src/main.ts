import log from "../src/utils/winston";
import runLoaders from "../src/loaders/index";
//import scriptConverter from "./services/scriptConverter";
import { performance } from 'perf_hooks';
import scriptRetriever from "./services/scriptRetriever";
import oracleLoader from "./loaders/oracleLoader";

function main(){
  log.info("Script started");
  let startTime = performance.now();

  runLoaders();
  scriptRetriever();


  let finishTime = performance.now();
  log.info((finishTime - startTime) / 1000 + " seconds");
}

main();
