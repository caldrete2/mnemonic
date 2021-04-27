CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "name" varchar UNIQUE,
  "phone" varchar,
  "email" varchar
);

CREATE TABLE "addr" (
  "addr_id" SERIAL PRIMARY KEY,
  "owner" varchar REFERENCES users(name),
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "zipcode" varchar
);
