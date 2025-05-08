import * as applications from "./code/applications/_module.mjs";
import * as canvas from "./code/canvas/_module.mjs";
import * as config from "./code/config.mjs";
import * as data from "./code/data/_module.mjs";
import * as documents from "./code/documents/_module.mjs";
import * as helpers from "./code/helpers/_module.mjs";
import * as utils from "./code/utils/_module.mjs";

globalThis.KEYWORD = {
  applications,
  canvas,
  config,
  data,
  documents,
  helpers,
  utils,
  id: "my-module",
};

/* -------------------------------------------------- */

Hooks.once("init", () => {});

/* -------------------------------------------------- */

Hooks.once("i18nInit", () => {});

/* -------------------------------------------------- */

Hooks.once("setup", () => {});

/* -------------------------------------------------- */

Hooks.once("ready", () => {});
