import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const product1 = {
        name: '123',
        count: 1
      };

  const product2 = {
    name: '321',
    count: 2,
  };

  const data = [product1, product2];

  const orderByPipe = new OrderByPipe();

  it('should order by count asc', () => {
    const result = orderByPipe.transform(data, 'count', true);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(product1);
    expect(result[1]).toEqual(product2);
  });

  it('should order by count desc', () => {
    const result = orderByPipe.transform(data, 'count', false);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(product2);
    expect(result[1]).toEqual(product1);
  });

  it('should order by name asc', () => {
    const result = orderByPipe.transform(data, 'name', true);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(product1);
    expect(result[1]).toEqual(product2);
  });
});