import {DayRunner} from './day_runner';

export class Day1 implements DayRunner {
  private depthMeasurements: number[];
  private windowSize: number;

  constructor(windowSize = 1) {
    this.depthMeasurements = [];
    this.windowSize = windowSize;
  }

  private parseInput(input: string) {
    input.split('\n').forEach(element => {
      this.depthMeasurements.push(parseInt(element));
    });
  }

  private calculateWindowSum(startIndex: number): number {
    let windowSum = 0;
    for (let i = startIndex; i < this.windowSize + startIndex; i++) {
      windowSum += this.depthMeasurements[i];
    }
    return windowSum;
  }

  run(input: string): number {
    this.parseInput(input);

    let count = 0;
    let previousWindowSum = this.calculateWindowSum(0);

    for (
      let index = 1;
      index < this.depthMeasurements.length - this.windowSize + 1;
      index++
    ) {
      const currentWindowSum = this.calculateWindowSum(index);
      if (currentWindowSum > previousWindowSum) {
        count++;
      }
      previousWindowSum = currentWindowSum;
    }

    return count;
  }
}
