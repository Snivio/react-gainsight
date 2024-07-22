"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ReactGainsight = require("./ReactGainsight");
Object.keys(_ReactGainsight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReactGainsight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReactGainsight[key];
    }
  });
});