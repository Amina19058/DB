class PostgresDialect {

  public actor: string = "CREATE TABLE public.actor (\n" +
    "    actor_id integer DEFAULT nextval('public.actor_actor_id_seq'::regclass) NOT NULL,\n" +
    "    first_name character varying(45) NOT NULL,\n" +
    "    last_name character varying(45) NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public address: string = "CREATE TABLE public.address (\n" +
    "    address_id integer DEFAULT nextval('public.address_address_id_seq'::regclass) NOT NULL,\n" +
    "    address character varying(50) NOT NULL,\n" +
    "    address2 character varying(50),\n" +
    "    district character varying(20) NOT NULL,\n" +
    "    city_id smallint NOT NULL,\n" +
    "    postal_code character varying(10),\n" +
    "    phone character varying(20) NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public category: string = "CREATE TABLE public.category (\n" +
    "    category_id integer DEFAULT nextval('public.category_category_id_seq'::regclass) NOT NULL,\n" +
    "    name character varying(25) NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public city: string = "CREATE TABLE public.city (\n" +
    "    city_id integer DEFAULT nextval('public.city_city_id_seq'::regclass) NOT NULL,\n" +
    "    city character varying(50) NOT NULL,\n" +
    "    country_id smallint NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public country: string = "CREATE TABLE public.country (\n" +
    "    country_id integer DEFAULT nextval('public.country_country_id_seq'::regclass) NOT NULL,\n" +
    "    country character varying(50) NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public customer: string = "CREATE TABLE public.customer (\n" +
    "    customer_id integer DEFAULT nextval('public.customer_customer_id_seq'::regclass) NOT NULL,\n" +
    "    store_id smallint NOT NULL,\n" +
    "    first_name character varying(45) NOT NULL,\n" +
    "    last_name character varying(45) NOT NULL,\n" +
    "    email character varying(50),\n" +
    "    address_id smallint NOT NULL,\n" +
    "    activebool boolean DEFAULT true NOT NULL,\n" +
    "    create_date date DEFAULT ('now'::text)::date NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now(),\n" +
    "    active integer\n" +
    ");";

  public film: string = "CREATE TABLE public.film (\n" +
    "    film_id integer DEFAULT nextval('public.film_film_id_seq'::regclass) NOT NULL,\n" +
    "    title character varying(255) NOT NULL,\n" +
    "    description text,\n" +
    "    release_year public.year,\n" +
    "    language_id smallint NOT NULL,\n" +
    "    rental_duration smallint DEFAULT 3 NOT NULL,\n" +
    "    rental_rate numeric(4,2) DEFAULT 4.99 NOT NULL,\n" +
    "    length smallint,\n" +
    "    replacement_cost numeric(5,2) DEFAULT 19.99 NOT NULL,\n" +
    "    rating public.mpaa_rating DEFAULT 'G'::public.mpaa_rating,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL,\n" +
    "    special_features text[],\n" +
    "    fulltext tsvector NOT NULL\n" +
    ");";

  public film_actor: string = "CREATE TABLE public.film_actor (\n" +
    "    actor_id smallint NOT NULL,\n" +
    "    film_id smallint NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public film_category: string = "CREATE TABLE public.film_category (\n" +
    "    film_id smallint NOT NULL,\n" +
    "    category_id smallint NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public inventory: string = "CREATE TABLE public.inventory (\n" +
    "    inventory_id integer DEFAULT nextval('public.inventory_inventory_id_seq'::regclass) NOT NULL,\n" +
    "    film_id smallint NOT NULL,\n" +
    "    store_id smallint NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public language: string = "CREATE TABLE public.language (\n" +
    "    language_id integer DEFAULT nextval('public.language_language_id_seq'::regclass) NOT NULL,\n" +
    "    name character(20) NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public payment: string =  "CREATE TABLE public.payment (\n" +
    "    payment_id integer DEFAULT nextval('public.payment_payment_id_seq'::regclass) NOT NULL,\n" +
    "    customer_id smallint NOT NULL,\n" +
    "    staff_id smallint NOT NULL,\n" +
    "    rental_id integer NOT NULL,\n" +
    "    amount numeric(5,2) NOT NULL,\n" +
    "    payment_date timestamp without time zone NOT NULL\n" +
    ");";

  public rental: string = "CREATE TABLE public.rental (\n" +
    "    rental_id integer DEFAULT nextval('public.rental_rental_id_seq'::regclass) NOT NULL,\n" +
    "    rental_date timestamp without time zone NOT NULL,\n" +
    "    inventory_id integer NOT NULL,\n" +
    "    customer_id smallint NOT NULL,\n" +
    "    return_date timestamp without time zone,\n" +
    "    staff_id smallint NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";

  public staff: string = "CREATE TABLE public.staff (\n" +
    "    staff_id integer DEFAULT nextval('public.staff_staff_id_seq'::regclass) NOT NULL,\n" +
    "    first_name character varying(45) NOT NULL,\n" +
    "    last_name character varying(45) NOT NULL,\n" +
    "    address_id smallint NOT NULL,\n" +
    "    email character varying(50),\n" +
    "    store_id smallint NOT NULL,\n" +
    "    active boolean DEFAULT true NOT NULL,\n" +
    "    username character varying(16) NOT NULL,\n" +
    "    password character varying(40),\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL,\n" +
    "    picture bytea\n" +
    ");";

  public store: string = "CREATE TABLE public.store (\n" +
    "    store_id integer DEFAULT nextval('public.store_store_id_seq'::regclass) NOT NULL,\n" +
    "    manager_staff_id smallint NOT NULL,\n" +
    "    address_id smallint NOT NULL,\n" +
    "    last_update timestamp without time zone DEFAULT now() NOT NULL\n" +
    ");";
}

export default PostgresDialect;

