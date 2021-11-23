import { callback } from '../shared/clickCallback.js';
const name = "Unknown";
document.getElementById("button-id").innerHTML = name;
document.getElementById("button-id").addEventListener("click", callback);
