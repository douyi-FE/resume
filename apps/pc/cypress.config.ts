import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/**/*.cy.{js,ts,jsx,tsx}',
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
