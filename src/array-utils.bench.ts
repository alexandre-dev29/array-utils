import { describe, bench } from "vitest";
import "./array-utils";

describe("Should test the bubbleSort method", () => {
  const myArray = [
    1, 5, 4, 3, 50, 200, 888, 45, 654,

    5, 5, 84, 5,

    3, 32, 5, 456, 68, 35,

    684, 3, 53, 13,

    46, 45, 321, 32, 64, 6, 43, 23, 864,

    3, 43,
  ];
  bench("bubblesort", () => {
    myArray.bubbleSort();
  });
});
