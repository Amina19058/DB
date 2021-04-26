import scriptRetriever from "./scriptRetriever";
import log from '../utils/winston';
import OracleDialect from "../translationSyntax/oracleDialect";
import PostgresDialect from "../translationSyntax/postgresDialect";


function scriptConverter (oldScript : string) {
  const oracleDialect = new OracleDialect();
  const postgresDialect = new PostgresDialect();

  let newScript: string = "";

  if (oldScript == postgresDialect.actor) {
    newScript = oracleDialect.actor;
  } else if (oldScript == postgresDialect.address) {
    newScript = oracleDialect.address;
  } else if (oldScript == postgresDialect.category) {
    newScript = oracleDialect.category;
  } else if (oldScript == postgresDialect.city) {
    newScript = oracleDialect.city;
  } else if (oldScript == postgresDialect.country) {
    newScript = oracleDialect.country;
  } else if (oldScript == postgresDialect.customer) {
    newScript = oracleDialect.customer;
  } else if (oldScript == postgresDialect.film) {
    newScript = oracleDialect.film;
  } else if (oldScript == postgresDialect.film_actor) {
    newScript = oracleDialect.film_actor;
  } else if (oldScript == postgresDialect.film_category) {
    newScript = oracleDialect.film_category;
  } else if (oldScript == postgresDialect.inventory) {
    newScript = oracleDialect.inventory;
  } else if (oldScript == postgresDialect.language) {
    newScript = oracleDialect.language;
  } else if (oldScript == postgresDialect.payment) {
    newScript = oracleDialect.payment;
  } else if (oldScript == postgresDialect.rental) {
    newScript = oracleDialect.rental;
  } else if (oldScript == postgresDialect.staff) {
    newScript = oracleDialect.staff;
  } else if (oldScript == postgresDialect.store) {
    newScript = oracleDialect.store;
  } else {
    log.error("Table does not exist in the list of tables!");
  }

  return newScript;
}

export default scriptConverter;
