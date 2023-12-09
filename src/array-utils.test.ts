import { expect, test, describe } from "vitest";
import "./array-utils";

describe("Should test the bubbleSort method", () => {
  const myArray = [1, 5, 4, 3, 50, 200, 88];
  const isSorted = (array: Array<any>) => {
    return (
      array.every((v, i) => i === 0 || v <= array[i - 1]) ||
      array.every((v, i) => i === 0 || v >= array[i - 1])
    );
  };

  test("Verify that the bubbleSort method is present on the array object", () => {
    expect("bubbleSort" in myArray).true;
  });
  test("test if all elements are sorted", () => {
    expect(isSorted(myArray.bubbleSort())).true;
  });
});

describe("Should test the sumNumbers method", () => {
  const myArray = [50, 200];

  test("Verify that the sumNumbers method is present on the array object", () => {
    expect("sumNumbers" in myArray).true;
  });
  test("test if all the sum will be 250", () => {
    expect(myArray.sumNumbers()).toEqual(250);
  });
  test("test if it will throw error when using other than numbers", () => {
    expect(() => ["mango", "pineapple"].sumNumbers()).toThrowError();
  });
});

describe("Should test the sumNumbers method", () => {
  type Users = {
    dateCreation: Date;
    groupe: string;
    name: string;
  };
  const listOfUsers: Users[] = [
    { dateCreation: new Date(), groupe: "Facebook", name: "John" },
    { dateCreation: new Date(), groupe: "GDG", name: "Doe" },
    { dateCreation: new Date(), groupe: "GDG", name: "Alexa" },
  ];
  const groupeByName = listOfUsers.groupBy("name");
  const groupByGroupe = listOfUsers.groupBy("groupe");

  test("Verify that the groupBy method is present on the array object", () => {
    expect("groupBy" in listOfUsers).true;
  });
  test("test if it will find 1 group of john", () => {
    const alexandres = groupeByName["John"] as Array<Users>;
    expect(alexandres.length).toEqual(1);
  });
  test("Should return undefined for not found elements", () => {
    const gdgs = groupByGroupe["RandomElement"] as Array<Users>;
    expect(gdgs).toBeUndefined();
  });
});
