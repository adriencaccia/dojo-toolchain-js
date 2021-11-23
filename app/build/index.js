import { callback } from "./shared/clickCallback.js";
const overridedButtonName = "My super button";
document.getElementById("button-id").innerHTML = overridedButtonName;
document.getElementById("button-id").addEventListener("click", callback);