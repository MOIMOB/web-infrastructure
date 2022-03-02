export default {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/test'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: ['./test/jest-pretest.ts'],
};
