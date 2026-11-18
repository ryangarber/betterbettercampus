import { useEffect, useState } from "preact/hooks";
import { GM_getValue, GM_setValue } from "$";
import { log } from "../log.ts";

export function App() {
	const [css, setCss] = useState("");

	useEffect(() => {
		(async () => {
			const css = await GM_getValue("bbc-css");
			setCss(css || "");
			log("Loaded CSS", css);
		})();
	}, []);

	const save = () => {
		GM_setValue("bbc-css", css);
		log("Saved CSS", css);
	};

	return (
		<div style={{ width: "250px", margin: "100px auto", textAlign: "center" }}>
			<textarea
				style={{ width: "100%", height: "100%" }}
				placeholder=".button { ... }"
				onChange={(event) => setCss(event.currentTarget?.value)}
			>
				{css}
			</textarea>
			<button type="button" onClick={save} style={{ background: "#333" }}>
				Save
			</button>
		</div>
	);
}
