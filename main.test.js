const longestCommonPrefix = require('./main');

describe('longestCommonPrefix', () => {
    test('should return "fl" for ["flower","flow","flight"]', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
    });

    test('should return "" for ["dog","racecar","car"]', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
    });

    test('should return "" for empty array', () => {
        expect(longestCommonPrefix([])).toBe("");
    });

    test('should return the string itself for array with single string', () => {
        expect(longestCommonPrefix(["hello"])).toBe("hello");
    });

    test('should return "" for array with empty strings', () => {
        expect(longestCommonPrefix(["", "", ""])).toBe("");
    });

    test('should handle array with strings of different lengths', () => {
        expect(longestCommonPrefix(["interspecies", "interstellar", "interstate"])).toBe("inters");
    });

    test('should handle array with identical strings', () => {
        expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
    });
}); 