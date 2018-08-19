// https://app.codesignal.com/skill-test/dYCH8sdnxGf5aGkez
const decodeString = s => /\d/.test(s) ? decodeString(s.replace(/(\d+)\[([^\[\]]+?)\]/g, (match, num, what) => what.repeat(+num))) : s