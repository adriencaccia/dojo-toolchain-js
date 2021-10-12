"use strict";

exports.__esModule = true;
var alert_1 = require("./alert");
var windowSizeLogger_1 = require("@shared/windowSizeLogger");
document.getElementById("button-id").addEventListener("click", alert_1["default"]);
(0, windowSizeLogger_1["default"])();