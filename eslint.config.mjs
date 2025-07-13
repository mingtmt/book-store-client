// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config";

export default createConfigForNuxt({}).override("nuxt/vue/rules", {
  files: ["**/*.vue"],
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
      },
    ],
  },
});
