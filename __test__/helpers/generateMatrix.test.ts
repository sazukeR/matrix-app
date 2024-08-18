import { generateMatrix } from "@/helpers";

describe("Testing on generateMatrix.ts", () => {
 it("Should return an array of arrays with the passed values", () => {
  const rows: number = 2;
  const columns: number = 3;

  const valueReturnedByTheFunction = generateMatrix(rows, columns);

  expect(valueReturnedByTheFunction).toEqual([
   ["", "", ""],
   ["", "", ""],
  ]);
 });
});
