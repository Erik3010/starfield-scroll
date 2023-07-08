import "../css/style.css";
import Starfield from "./Starfield";

const canvas = document.querySelector("#canvas");
const starfield = new Starfield({ canvas });
starfield.init();
