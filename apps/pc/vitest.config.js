export default {
    globals: true,
    environment: 'jsdom',
    transformMode: {
        web: [/\.vue$/],
    },
    // 测试报告配置
    reporter: ['verbose', 'html', 'json'],
    outputFile: {
        html: './test-results/index.html',
        json: './test-results/results.json',
        junit: './test-results/junit.xml'
    },
    coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage',
        // 覆盖率特定的配置
        all: true,
        include: ['src/**/*.{js,ts,vue}'],
        exclude: ['node_modules/**', 'tests/**']
    }
}