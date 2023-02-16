DROP TABLE IF EXISTS
"listings";
CREATE TABLE "listings" (
  "id" BIGINT NOT NULL,
  "city_id" INTEGER NOT NULL,
  "city" TEXT,
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
  "rating" REAL DEFAULT 1,
  PRIMARY KEY ("id")
);

-- Load data into listings table
COPY "listings"("id","city_id","city","listing_url","name", "neighborhood_overview", "picture_url", "host_name", "host_url", "neighborhood", "long", "lat", "property_type", "room_type", "accomodates", "num_bedrooms", "num_beds", "amenities", "price", "rating")
FROM '/home/chhuongle/listings/listingdata.csv'
WITH DELIMITER ','
CSV HEADER;
