import { updateMatrix } from "@/helpers";

describe("Testing on updateMatrix.ts", () => {
 it("Should return an array of arrays with the passed values", () => {
  const rows: number = 2;
  const columns: number = 2;
  const inputValues: string = "8888";

  const valueReturnedByTheFunction: string[][] = updateMatrix(
   rows,
   columns,
   inputValues
  );

  expect(valueReturnedByTheFunction).toEqual([
   ["8", "8"],
   ["8", "8"],
  ]);
 });
});
