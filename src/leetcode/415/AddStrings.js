// Given two non-negative integers num1 and num2 represented as string, return
// the sum of num1 and num2.
// Note: The length of both num1 and num2 is < 5100. Both num1 and num2 contains
// only digits 0-9. Both num1 and num2 does not contain any leading zero. You
// must not use any built-in BigInteger library or convert the inputs to integer
// directly.
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var arr1 = num1.split(''), arr2 = num2.split('');
    if (arr1.length > arr2.length) {
        for (var i = 0; i <= (arr1.length - arr2.length); i++) {
            arr2.unshift('0');
        }
    }
    else if (arr1.length < arr2.length) {
        for (var i = 0; i <= (arr2.length - arr1.length); i++) {
            arr1.unshift('0');
        }
    }
    console.log(arr1);
    return add(arr1, arr2);
};
function add(arr1, arr2) {
    var i = arr1.length - 1, shouldplus = false, temparr = [], result;
    while (i >= 0) {
        if (shouldplus) {
            result = arr1[i] - 0 + (arr2[i] - 0) + 1;
            if (result < 10) {
                shouldplus = false;
                temparr.unshift(result + '');
            }
            else {
                shouldplus = true;
                if (i != 0) {
                    temparr.unshift((result + '').charAt(1));
                }
                else {
                    temparr.unshift(result + '');
                }
            }
        }
        else {
            result = arr1[i] - 0 + (arr2[i] - 0);
            console.log(arr1[i], arr2[i]);
            console.log(result);
            if (result < 10) {
                shouldplus = false;
                temparr.unshift(result + '');
            }
            else {
                shouldplus = true;
                temparr.unshift((result + '').charAt(1));
            }
        }
        i--;
    }
    return temparr.join('');
}
