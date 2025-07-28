import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { buffer } from "node:stream/consumers";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Something went wrong');
  return db.prepare(`SELECT * FROM meals`).all();
}

export function getMeal(slug) {
  //  await new Promise(resolve => setTimeout(resolve, 2000));
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export default function saveMeal(meal) {
  meal.slug = slugify(xss(meal.title), { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createReadStream(`public/images/${fileName}`);

  const bufferedImage = meal.image.arrayBuffer();

  stream.write(buffer.form(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = "/images/" + fileName;

  db.prepare(
    `INSERT INTO meals 
        (title, summary, instructions, image, creator, creator_email, slug) VALUES (
            @title,
            @summary,
            @instructions,
            @image,
            @creator,
            @creator_email,
            @slug,
    )
  `).run(meal);
}
