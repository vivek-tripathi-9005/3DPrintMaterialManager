/**
 * Parses JSON strings within an object.
 * @param {Object} data - The object containing JSON strings to be parsed.
 * @returns {Object} - The object with parsed JSON strings.
 */

const parseJsonStrings = (data) => {
    const parsedData = {}
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            try {
                parsedData[key] = JSON.parse(data[key])
            } catch (e) {
                parsedData[key] = data[key]
            }
        }
    }
    return parsedData
}

module.exports = parseJsonStrings
