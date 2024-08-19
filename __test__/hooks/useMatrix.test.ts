import { generateMatrix } from "@/helpers";
import { useMatrix } from "@/hooks/useMatrix";
import { act, renderHook } from "@testing-library/react";
import { ChangeEvent } from "react";

describe("Testing on useMatrix.ts", () => {
 it("Should return the default value", () => {
  const { result } = renderHook(() => useMatrix());

  const {
   rows,
   columns,
   inputValue,
   matrix,
   showRotate,
   handleRowsChange,
   handleColumnsChange,
   handleInputChange,
   handleRotate,
  } = result.current;

  expect(rows).toBe(1);
  expect(columns).toBe(1);
  expect(inputValue).toBe("");
  expect(matrix).toEqual(generateMatrix(1, 1));
  expect(showRotate).toBeTruthy();
  expect(handleRowsChange).toEqual(expect.any(Function));
  expect(handleColumnsChange).toEqual(expect.any(Function));
  expect(handleInputChange).toEqual(expect.any(Function));
  expect(handleRotate).toEqual(expect.any(Function));
 });

 it("Should change the number of rows", () => {
  const newValue = 3;
  const { result } = renderHook(() => useMatrix());

  // console.log(result.current);

  const { handleRowsChange } = result.current;

  act(() => {
   handleRowsChange({
    target: { value: newValue.toString() },
   } as ChangeEvent<HTMLSelectElement>);
  });

  expect(result.current.rows).toBe(newValue);
 });

 it("Should change the number of columns", () => {
  const newValue = 5;
  const { result } = renderHook(() => useMatrix());

  const { handleColumnsChange } = result.current;

  act(() => {
   handleColumnsChange({
    target: { value: newValue.toString() },
   } as ChangeEvent<HTMLSelectElement>);
  });

  expect(result.current.columns).toBe(newValue);
 });

 it("Should change the inputValue", () => {
  const newValue = "5";
  const { result } = renderHook(() => useMatrix());

  const { handleInputChange } = result.current;

  act(() => {
   handleInputChange({
    target: { value: newValue },
   } as ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.inputValue).toBe(newValue);
 });

 it("Should rotate the matrix state", () => {
  const { result } = renderHook(() => useMatrix());

  const { handleRotate } = result.current;

  act(() => {
   handleRotate();
  });

  expect(result.current.matrix).toEqual([
   ["", "", ""],
   ["", "", ""],
   ["", "", ""],
   ["", "", ""],
   ["5", "", ""],
  ]);
 });
});
