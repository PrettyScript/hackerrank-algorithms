function repeatedString(s, n) {
    /**
     * count the number of a in the given str
     * something substring then add the remaining string
     *
     * while string is not the length of n,
     * repeat the string till it is less than n length
     * concat the remain string
     */

    let repeats = Math.floor(n / s.length);

    console.log(repeats);
    let originalAs = (s.split("a").length - 1) * repeats;

    let remaingChar = n - s.length * repeats;
    console.log(remaingChar);
    let subStr = s.substring(0, remaingChar);

    let subStrAs = subStr.split("a").length - 1;

    return originalAs + subStrAs;
}

console.log(repeatedString("aba", 10));
