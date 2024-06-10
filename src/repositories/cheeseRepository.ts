import db from "../config/db";
import { Cheese } from "../models/cheese";

//TODO: add pagination, use orm
export class CheeseRepository {
  getAllCheeses(): Promise<Cheese[]> {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT cheeses.id, cheeses.name, cheeses.color, prices.price, cheeses.image
        FROM cheeses
        JOIN prices ON cheeses.id = prices.cheeseId
        WHERE prices.updatedAt = (
        SELECT MAX(updatedAt) 
        FROM prices 
        WHERE prices.cheeseId = cheeses.id
        );`;
      db.query(query, (err: any, results: Cheese[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}
