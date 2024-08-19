import { validateInput } from "@/helpers";

describe("Testing on validateInputs.ts", () => {
 it("should return true for valid input within the matrix size", () => {
  expect(validateInput("1234", 2, 2)).toBeTruthy(); // 2x2 matrix can hold 4 digits
 });

 it("should return false for input exceeding matrix size", () => {
  expect(validateInput("12345", 2, 2)).toBeFalsy(); // 2x2 matrix can only hold 4 digits, not 5
 });

 it("should return false for input with non-numeric characters", () => {
  expect(validateInput("12a4", 2, 2)).toBeFalsy(); // 'a' is not a digit
 });

 it("should return true for empty input", () => {
  expect(validateInput("", 2, 2)).toBeTruthy(); // Empty input is valid
 });

 it("should return true for input with max size of matrix", () => {
  expect(validateInput("123456", 2, 3)).toBeTruthy(); // 2x3 matrix can hold 6 digits
 });

 it("should return true when rows or columns are 0 (considered as 1)", () => {
  expect(validateInput("1", 0, 0)).toBeTruthy(); // 1x1 matrix can hold 1 digit
 });

 it("should return true for valid input when rows or columns are negative (considered as 1)", () => {
  expect(validateInput("1", -1, -1)).toBeTruthy(); // Negative rows/columns treated as 1x1 matrix
 });

 it("should return true for a large valid input within matrix size", () => {
  expect(validateInput("1234567890", 5, 2)).toBeTruthy(); // 5x2 matrix can hold 10 digits
 });

 it("should return false for a large input exceeding matrix size", () => {
  expect(validateInput("12345678901", 5, 2)).toBeFalsy(); // 5x2 matrix can only hold 10 digits, not 11
 });
});
