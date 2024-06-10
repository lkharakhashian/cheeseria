import { Request, Response } from 'express';
import { getAllCheeses } from '../cheeseController';
import { CheeseRepository } from '../../repositories/cheeseRepository';

jest.mock('../../repositories/cheeseRepository');

const MockCheeseRepository = CheeseRepository as jest.MockedClass<typeof CheeseRepository>;

//TODO:Add more tests
describe('Cheese Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it('should return all cheeses', async () => {
    const cheeses = [{ id: 1, name: 'Cheddar', color: 'yellow', price: 9.99, image: 'url' }];
    MockCheeseRepository.prototype.getAllCheeses.mockResolvedValue(cheeses);

    await getAllCheeses(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith(cheeses);
  });

  it('should handle errors', async () => {
    MockCheeseRepository.prototype.getAllCheeses.mockRejectedValue(new Error('Database Error'));

    await getAllCheeses(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
  });
});
