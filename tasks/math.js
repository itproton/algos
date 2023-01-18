/**
 * Factorial
 * 10! = 10*9*8*7*6
 */

/**
 * 
 */

function factorial(n) {
    let res = n;
    while (n-- > 0) {
        res *= n;
    }
    return res;
}