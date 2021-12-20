import {EXAMPLE_1} from '../input/day1';
import {Day1} from '../src/day1';

describe('Part 1, Example 1: Count the number of times a depth measurement increases from the previous measurement', () => {
  it('should find 7 measurements that are larger than the previous measurement.', () => {
    const day1 = new Day1();
    const result = day1.run(EXAMPLE_1);
    expect(result).toBe(7);
  });
});

describe('Part 2, Example 1: Count the number of times the sum of measurements in this sliding window increases from the previous sum', () => {
  it('should find 5 sums that are larger than the previous sum.', () => {
    const day1 = new Day1(3);
    const result = day1.run(EXAMPLE_1);
    expect(result).toBe(5);
  });
});

/* Define INPUT as EXAMPLE_1, but in my_day1.ts

import {INPUT} from '../input/my_day1';
describe('My input', () => {
  it('should pass', () => {
    const day1 = new Day1(3);
    console.log(day1.run(INPUT));
  });
});
*/
