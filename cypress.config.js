import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      baseUrl: "http://localhost:5173/talk-to-an-expert/",
  },
  // Add other configuration options as needed
});
