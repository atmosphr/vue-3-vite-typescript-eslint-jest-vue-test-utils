module.exports = {
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': 'vue-jest'
    },
    testMatch: [
        '<rootDir>/tests/unit/**/*.[jt]s'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,ts,vue}',
        '!src/**/*.{js,ts}',
        '!src/**/env.d.ts',
        '!src/**/App.vue'
    ]
}
