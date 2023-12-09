class ArrayOperations {
  static sumArray(arrayOfNumbers: number[]): number {
    return arrayOfNumbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  }
  static bubbleSort(array: number[]): number[] {
    array = array.slice(); // creates a copy of the array

    // je suis au Devfest
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          let swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
      }
    }
    return array;
  }

  static groupBy<T, K extends keyof T>(key: K, arrayElement: T[]): Record<string, T[]> {
    return arrayElement.reduce((acc: Record<string, T[]>, obj: T) => {
      const groupByKey = obj[key] as any;
      if (!acc[groupByKey]) {
        acc[groupByKey] = [];
      }
      acc[groupByKey].push(obj);
      return acc;
    }, {} as Record<string, T[]>);
  }
}

interface Array<T> {
  sumNumbers(): number;
  bubbleSort(): number[];
  groupBy<K extends keyof T>(key: K): Record<string, T[]>;
}

Array.prototype.groupBy = function <T, K extends keyof T>(key: K): Record<string, T[]> {
  return ArrayOperations.groupBy(key, this);
};

Array.prototype.bubbleSort = function () {
  return ArrayOperations.bubbleSort(this);
};
Array.prototype.sumNumbers = function () {
  if (Array.isArray(this) && this.every((element) => typeof element === "number")) {
    return ArrayOperations.sumArray(this);
  }
  throw new Error("this method accepts only numbers");
};
