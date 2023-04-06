-- create hurricane_metadata table
DROP TABLE hurricane_metadata

CREATE TABLE hurricane_metadata (
	"ID" varchar(20),
	"Name" varchar(40),
	"Date" INT,
	"Time" INT,
	"Event" varchar(40),
	"Status" varchar(40),
	"Latitude" varchar(10),
	"Longitude" varchar(10),
	"Maximum Wind" INT,
	"Minimum Pressure" INT,
	"Low Wind NE" INT,
	"Low Wind SE" INT,
	"Low Wind SW" INT,
	"Low Wind NW" INT,
	"Moderate Wind NE" INT,
	"Moderate Wind SE" INT,
	"Moderate Wind SW" INT,
	"Moderate Wind NW" INT,
	"High Wind NE" INT,
	"High Wind SE" INT,
	"High Wind SW" INT,
	"High Wind NW" INT
);

SELECT * FROM hurricane_metadata;