import { rotateMatrix } from "@/helpers";

describe("Testing on rotateMatrix.ts", () => {
 it("Should return an array of arrays with the passed values rotating the matrix 90 degrees", () => {
  const matrix: string[][] = [
   ["1", "2", "3"],
   ["4", "5", "6"],
   ["7", "8", "9"],
  ];

  const valueReturnedByTheFunction: string[][] = rotateMatrix(matrix);

  expect(valueReturnedByTheFunction).toEqual([
   ["3", "6", "9"],
   ["2", "5", "8"],
   ["1", "4", "7"],
  ]);
 });
});
