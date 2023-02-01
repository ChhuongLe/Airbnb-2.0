DROP TABLE IF EXISTS
"listings";

CREATE TABLE "listings" (
  "id" BIGINT NOT NULL,
  "listing_url" TEXT,
  "title" TEXT,
  "description" TEXT,
  "image_url" TEXT,
  "host_name" TEXT,
  "host_url" TEXT,
  "neighborhood" TEXT,
  "long" REAL DEFAULT 0,
  "lat" REAL DEFAULT 0,
  "property_type" TEXT,
  "room_type" TEXT,
  "accomodates" SMALLINT DEFAULT 1,
  "num_bedrooms" SMALLINT DEFAULT 1,
  "num_beds" SMALLINT DEFAULT 1,
  "price" TEXT,
  "rating" REAL DEFAULT 1
);

-- Load data into listings table
COPY "listings"("id", "listing_url", "title", "description", "image_url", "host_name", "host_url", "neighborhood", "long", "lat", "property_type", "room_type", "accomodates", "num_bedrooms", "num_beds", "price", "rating")
from '/home/chhuongle/listings/listings_edit.csv'
WITH DELIMITER ','
CSV HEADER;
