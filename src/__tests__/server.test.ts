import { test as testFn } from "../server";

test('tests working', () => {
    expect(testFn()).toBe(1);
});