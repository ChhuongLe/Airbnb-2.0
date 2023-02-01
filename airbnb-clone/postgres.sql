DROP TABLE IF EXISTS
"listings"

CREATE TABLE "listings" (
  "id" INTEGER NOT NULL,
  "listing_url" TEXT,
  "image_url" TEXT,
  "host_name" TEXT,
  "title" TEXT,
  "star" INTEGER,
  "description" TEXT,
  "price" TEXT,
  "long" INTEGER,
  "lat" INTEGER,
  PRIMARY KEY("id"),
)

-- Load data into listings table
COPY "listings"("id", "listing_url", "image_url", "host_name", "title", "star", "long", "lat")
from '~/listings/listings.csv'
DELIMITER ','
CSV HEADER;