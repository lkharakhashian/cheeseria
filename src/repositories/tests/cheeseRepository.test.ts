import { CheeseRepository } from '../cheeseRepository';
import db from '../../config/db';

jest.mock('../../config/db');

//TODO:Add more tests
describe('Cheese Repository', () => {
  it('should fetch all cheeses from the database', async () => {
    const mockQuery = jest.fn();
    (db.query as jest.Mock).mockImplementation((query, callback) => {
      callback(null, [{ id: 1, name: 'Cheddar', color: 'yellow', price: 9.99, image: 'url' }]);
    });

    const repository = new CheeseRepository();
    const cheeses = await repository.getAllCheeses();

    expect(cheeses).toEqual([{ id: 1, name: 'Cheddar', color: 'yellow', price: 9.99, image: 'url' }]);
    expect(db.query).toHaveBeenCalled();
  });
});
