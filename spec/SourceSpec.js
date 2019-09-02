let app = require("../app/Source.js");

describe("aVeryBigSum", function () {
    it("The function should add 2 numbers", function () {
        let value = app.aVeryBigSum(["1000000001", "1000000002", "1000000003", "1000000004", "1000000005"]);
        expect(value).toEqual(BigInt(5000000015));
    });

});

describe("compareTriplets", function () {
    it("The function compare the numbers at the same index and calculate a score for each array.", function () {
        let value = app.compareTriplets([
            3, 4, 5, 6, 7, 8, 6, 7
        ], [
            5, 6, 4, 7, 3, 2, 3, 2
        ]);
        expect(value).toEqual([5, 3]);
    });

    it("Testing for uneven comparison", function () {
        let value = app.compareTriplets([
            7, 8, 6, 7
        ], [
            5, 6, 4, 7, 3, 2, 3, 2
        ]);
        expect(value).toEqual([3, 4]);
    });

    it("Testing for uneven comparison", function () {
        let value = app.compareTriplets([
            5, 6, 4, 7, 3, 2, 3, 2
        ], [
            7, 8, 6, 7
        ]);
        expect(value).toEqual([4, 3]);
    });
});

describe("diagonalDifference", function () {
    it("The function compare the numbers at the same index and calculate a score for each array.", function () {
        let value = app.diagonalDifference([
            [1, 2, 3],
            [4, 5, 6],
            [9, 8, 9]
        ]);
        expect(value).toEqual(2);
    });

    it("The function compare the numbers at the same index and calculate a score for each array.", function () {
        let value = app.diagonalDifference([
            [11, 2, 4],
            [4, 5, 6],
            [10, 8, -12]
        ]);
        expect(value).toEqual(15);
    });
});

describe("plusMinus", function () {
    it("The function compare the numbers at the same index and calculate a score for each array.", function () {
        let value = app.plusMinus([1, 1, 0, -1, -1]);
        expect(value).toEqual(["0.400000", "0.400000", "0.200000"]);
    });
    it("The function compare the numbers at the same index and calculate a score for each array.", function () {
        let value = app.plusMinus([-4, 3, -9, 0, 4, 1]);
        expect(value).toEqual(["0.500000", "0.333333", "0.166667"]);
    });
});

describe("staircase", function () {
    it("The function compare the numbers at the same index and calculate a score for each array.", function () {
        let value = app.staircase(5);
        expect(value).toEqual();
    });
});