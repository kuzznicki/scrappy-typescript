export default {
    clearMocks: true,
    testMatch: ["**/__tests__/**/*.test.ts?(x)"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
};
