import buttonCb from "./alert";
import windowLogger from "../shared/windowSizeLogger"
document.getElementById("button-id").addEventListener("click", buttonCb);
windowLogger()
