import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import postcssImport from "postcss-import";
import postcssValueParser from "postcss-value-parser";

/**
 * A URL prefix that should be removed when the css is compiled.
 * This turns a css property like `url("/systems/my-system/assets/bob.webp")`
 * into `url("assets/bob.webp")`.
 * @type {string}
 */
const URL_TO_REPLACE = "/<module|system>/REPLACE_ME/";

function adjustCSSUrls() {
  return {
    postcssPlugin: "rewrite-system-urls",
    Declaration(decl) {
      const parsed = postcssValueParser(decl.value);

      parsed.walk(node => {
        if ((node.type === "function") && (node.value === "url")) {
          const urlNode = node.nodes[0];
          const url = urlNode?.value;
          if (!url?.startsWith(URL_TO_REPLACE)) return;
          urlNode.value = url.slice(URL_TO_REPLACE.length);
        }
      });

      decl.value = parsed.toString();
    },
  };
}
adjustCSSUrls.postcss = true;

export default {
  input: "./_main.mjs",
  output: {
    file: "./public/main.mjs",
    format: "esm",
  },
  plugins: [
    resolve(),
    postcss({
      plugins: [
        postcssImport(),
        adjustCSSUrls(),
      ],
      extract: true,
    }),
  ],
};
