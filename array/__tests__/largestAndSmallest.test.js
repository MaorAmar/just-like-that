const { largestAndSmallestNum } = require('../largestAndSmallest');

describe('Largest and Smallest num', () => {
  test('Largest and Smallest - Regular array', () => {
    const list = [1, 5, 7, 3, 20];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(1);
    expect(max).toBe(20);
  });

  test('Largest and Smallest - Empty array', () => {
    const list = [];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(0);
    expect(max).toBe(0);
  });

  test('Largest and Smallest - Single element array', () => {
    const list = [10];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(10);
    expect(max).toBe(10);
  });

  test('Largest and Smallest - Array with negative numbers', () => {
    const list = [-10, -5, -7, -3, -20];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(-20);
    expect(max).toBe(-3);
  });

  test('Largest and Smallest - Array with mixed positive and negative numbers', () => {
    const list = [-10, 5, 0, -3, 20];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(-10);
    expect(max).toBe(20);
  });

  test('Largest and Smallest - Array with duplicates', () => {
    const list = [3, 3, 3, 3, 3];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(3);
    expect(max).toBe(3);
  });

  test('Largest and Smallest - Array with non-numeric values (ignored)', () => {
    const list = [10, 'a', null, 5, undefined, -3];
    const filteredList = list.filter((item) => typeof item === 'number');
    const [min, max] = largestAndSmallestNum(filteredList);
    expect(min).toBe(-3);
    expect(max).toBe(10);
  });

  test("Largest and Smallest - Array with Infinity and -Infinity", () => {
    const list = [10, Infinity, -Infinity, 5, -3];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(-Infinity);
    expect(max).toBe(Infinity);
  });

  test("Largest and Smallest - Array with non-numeric values", () => {
    const list = [10, "a", null, 5, undefined, -3];
    const [min, max] = largestAndSmallestNum(list);
    expect(min).toBe(-3);
    expect(max).toBe(10);
  });
});
