module.exports = {
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx"
    ],
    globals: {
        "NODE_ENV": "test",
    },
    transform: {
        "^.+\\.(t|j)s$": "babel-jest"
    }
};