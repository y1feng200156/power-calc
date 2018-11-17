const powerInHours = 1000;

const diffs = (powers: number[]) => {
  return powers
    .reduce((accumulator: number[], current: number) => {
      if (accumulator.length === 0) {
        return [current];
      } else {
        return accumulator.concat([current - powers[accumulator.length - 1]]);
      }
    }, [])
    .concat([Infinity]);
};

const calcPower = (totalPower: number, powerDiffs: number[], prices: number[]): number => {
  if (powerDiffs.length !== prices.length) {
    return 0;
  }
  if (!totalPower || totalPower <= 0) {
    return 0;
  }
  const currentDiff = powerDiffs[0];
  const currentPrice = prices[0];
  const currentPower = Math.min(totalPower, currentDiff);
  const overflowPower = totalPower - currentPower;
  return currentPower * currentPrice + calcPower(overflowPower, powerDiffs.slice(1), prices.slice(1));
};

const yearDays = () => (new Date().getFullYear() % 4 === 0 ? 366 : 365);

export const monthTotal = (power = 1, hours = 1) => {
  return (power / powerInHours) * hours * 30;
};

export const yearTotal = (power = 1, hours = 1) => (power / powerInHours) * hours * yearDays();

export const powerPrice = (totalPower: number, powers: number[], prices: number[]): number => {
  return Math.ceil(calcPower(totalPower, diffs(powers), prices) * 100) / 100;
};
