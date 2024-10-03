import { pool } from "./database.js";
import "./dotenv.js";
import carData from "../data/cars.js";

async function createCarsTable() {
  const createTableQuery = `
		DROP TABLE IF EXISTS cars;

		CREATE TABLE IF NOT EXISTS cars (
			id SERIAL PRIMARY KEY,
			make VARCHAR(255) NOT NULL,
			model VARCHAR(10) NOT NULL,
			year INTEGER,
			msrp INTEGER,
			audience VARCHAR(255) NOT NULL,
			usage VARCHAR(255) NOT NULL,
			description TEXT NOT NULL,
			image VARCHAR(255) NOT NULL
		)
	`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 gifts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating cars table", err);
  }
}

const seedCarsTable = async () => {
  await createCarsTable();

  carData.forEach((gift) => {
    const insertQuery = {
      text: "INSERT INTO cars (make, model, year, msrp, audience, usage, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    };

    const values = [
      gift.make,
      gift.model,
      gift.year,
      gift.msrp,
      gift.audience,
      gift.usage,
      gift.description,
      gift.image,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting car", err);
        return;
      }

      console.log(`✅ ${gift.name} added successfully`);
    });
  });
};

seedCarsTable();
