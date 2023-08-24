import { PositiveArray } from "./PositiveArray";

let arr: PositiveArray;

describe("Tests over array use cases", () => {
  beforeEach(() => {
    arr = new PositiveArray();
  });

  it("should add a value if it is positive", () => {
    const value = 6;
    arr.add(value);
    const expectArray = [6];
    const balance = arr.values;
    expect(expectArray).toStrictEqual(balance);
  });
  it("should return an empty array ", () => {
    const value = 0;
    arr.add(10);
    arr.remove(value);
    const expectArray: number[] = [];
    const balance = arr.values;
    expect(balance).toStrictEqual(expectArray);
  });

  it("should return undefined for a non-existent index", () => {
    const value = -1;
    arr.add(10);
    const remove = arr.remove(value);
    expect(remove).toBeUndefined();
  });
});
