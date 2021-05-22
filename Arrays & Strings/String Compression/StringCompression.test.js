const { stringCompression } = require('./StringCompression')

test("aabcccccaaa => a2b1c5a3", () => {
    expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3")
})

test("abcd => abcd", () => {
    expect(stringCompression("abcd")).toBe("abcd")
})

test("aedfzlkfjdd => aedfzlkfjdd", () => {
    expect(stringCompression("aedfzlkfjdd")).toBe("aedfzlkfjdd")
})