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
    verbose: true,
    transform: {
        "^.+\\.(t|j)s$": "babel-jest"
    }
};