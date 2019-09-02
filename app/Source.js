exports = module.exports = {};

exports.aVeryBigSum = function (ar) {
    let sum = BigInt(0)

    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]);
    }

    return sum;
};

exports.compareTriplets = function (a, b) {
    let arrayLength = a.length;
    if (a.length !== b.length) {
        if (a.length < b.length) {
            arrayLength = b.length
        }
    }

    let aliceFinalScore = 0;
    let bobFinalScore = 0;

    for (let i = 0; i < arrayLength; i++) {
        let aliceScore = parseInt(a[i]);
        let bobScore = parseInt(b[i]);

        if (isNaN(aliceScore)) {
            bobFinalScore += 1

            continue;
        }
        if (isNaN(bobScore)) {
            aliceFinalScore += 1

            continue;
        }

        if (aliceScore > bobScore) {
            aliceFinalScore += 1;

            continue;
        }

        if (aliceScore < bobScore) {
            bobFinalScore += 1;

            continue;
        }
    }
    return [aliceFinalScore, bobFinalScore];
};

exports.diagonalDifference = function (arr) {
    let arrLength = arr.length;
    let firstSum = 0;
    let secondSum = 0;

    let i = 0;

    for (i; i < arrLength; i++) {
        firstSum += arr[i][i];
    }
    i = arrLength - 1;
    let m = 0;
    for (i; i >= 0; i--) {
        secondSum += arr[m][i];
        m++
    }

    return Math.abs(firstSum - secondSum)
};

exports.plusMinus = function (arr) {
    let arrLength = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arrLength; i++) {
        if (parseFloat(arr[i]) === 0) {
            zero += 1;
        }
        if (parseFloat(arr[i]) > 0) {
            positive += 1;
        }
        if (parseFloat(arr[i]) < 0) {
            negative += 1;
        }
    }

    let positiveTotal = (positive / arrLength).toFixed(6);
    let negativeTotal = (negative / arrLength).toFixed(6);
    let zeroTotal = (zero / arrLength).toFixed(6);

    return [positiveTotal, negativeTotal, zeroTotal]
};

exports.staircase = function (n) {
    let count = n + 1;
    for (let i = 1; i < count; i++) {
        for (let h = 0; h < (count - i -1); h++) {
            process.stdout.write(" ");
        }
        for (let m = 0; m < i; m++) {
            process.stdout.write("#");
        }
        if (i+1 !== count) {
            process.stdout.write("\n");
        }
    }
};