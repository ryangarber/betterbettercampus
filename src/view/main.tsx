import { render } from "preact";
import { log } from "../log.ts";
import { App } from "./App.tsx";

log("Creating view");

const root = document.createElement("div");
root.id = "bbc-root";
document.body.appendChild(root);
render(<App />, root);

log("Waiting for keys");

window.addEventListener("keydown", (event) => {
	if (event.key === "/" && (event.metaKey || event.ctrlKey)) {
		event.preventDefault();

		log("Toggling view");
		root.classList.toggle("active");
	}
});

log("Ready");
