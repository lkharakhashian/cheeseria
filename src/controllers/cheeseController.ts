import { Request, Response } from 'express';
import { CheeseRepository } from '../repositories/cheeseRepository';

const cheeseRepository = new CheeseRepository();

export const getAllCheeses = async (req: Request, res: Response) => {
  try {
    const cheeses = await cheeseRepository.getAllCheeses();
    res.json(cheeses);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
