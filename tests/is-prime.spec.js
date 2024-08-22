const { isPrime } = require("../problems/is-prime.js");

describe("is prime", () => {
    beforeEach(() => {});

    describe("isPrime when called", () => {
        it("should pass all tests", () => {
            expect(isPrime(2)).toEqual(true);
            expect(isPrime(4)).toEqual(false);
            expect(isPrime(5)).toEqual(true);
            expect(isPrime(6)).toEqual(false);
            expect(isPrime(7)).toEqual(true);
            expect(isPrime(8)).toEqual(false);
            expect(isPrime(25)).toEqual(false);
            expect(isPrime(31)).toEqual(true);
            expect(isPrime(2017)).toEqual(true);
            expect(isPrime(2048)).toEqual(false);
            expect(isPrime(713)).toEqual(false);
            expect(isPrime(1)).toEqual(false);
        })
    });
});
