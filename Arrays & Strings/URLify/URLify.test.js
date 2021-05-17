const { expect } = require('@jest/globals')
const { URLify, URLifyJS } = require('./URLify')

test("\"Mr John Smith         \" to output \"Mr%20John%20Smith\"", () => {
    expect(URLify("Mr John Smith         ")).toBe("Mr%20John%20Smith")
    expect(URLifyJS("Mr John Smith         ")).toBe("Mr%20John%20Smith")
})

test("\"     test   this\" to output \"test%20this\"", () => {
    expect(URLify("     test   this")).toBe("test%20%20this")
    expect(URLifyJS("     test   this")).toBe("test%20this")
})