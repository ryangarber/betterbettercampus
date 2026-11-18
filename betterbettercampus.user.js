// ==UserScript==
// @name         betterbettercampus
// @namespace    http://ryangarber.dev/betterbettercampus
// @version      2026-02-28
// @description  Features and improvements for BetterCampus
// @author       Ryan Garber
// @match        https://canvas.instructure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=canvas.instructure.com
// ==/UserScript==

(() => {
  let css = document.getElementById("bbc-css");
  if (!css) {
    css = document.createElement("style");
    document.head.appendChild(css);
  }
  css.innerHTML = `
/* Core */
:root {
	--ic-brand-font-color-dark: #50a3e2; /* links */
	--bbc-surface: #1c1c1c;
	--bbc-surface-high: #282828;
	--bbc-border: #444444;
	--bbc-text: #cccccc;
}

/* Modal */
#ek-modal * {
	background: var(--bbc-surface) !important;
	color: var(--bbc-text) !important;
	border-color: var(--bbc-border) !important;
}

/* Drawer (Discussion), Upload Box */
[data-cid="DrawerLayout"] > [class$="-mask"],
[data-cid="DrawerLayout"] > [data-cid="DrawerTray"],
span:has(> [data-testid="DiscussionEdit-container"]),
[data-testid="upload-box"] > span > div > div > span {
	background: var(--bbc-surface) !important;
}

/* Panel (Rubric, Submission, Feedback) */
[data-testid$="-tab"] > div,
[data-testid$="-tab"] [class$="-view"],
[class*="-tray"],
[class*="-tray"] [class$="-view"] {
	/* #enhanced-rubric-assessment-tray, [data-testid="rubric-assessment-traditional-view"] > [class$="-view"] */
	background: var(--bbc-surface) !important;
	color: var(--bbc-text) !important;
	border-color: var(--bbc-border) !important;
}

/* Content (Question, Answer) */
.user_content span,
.dp-content-block,
.question_text *,
.answer * {
	background: revert !important;
	background-color: revert !important;
	font-family: revert !important;
	color: #fff !important;
}

/* Table */
table,
thead,
tbody,
th,
tr,
td,
.tox-mbtn,
.tox-tbtn {
	background: var(--bbc-surface) !important;
	color: var(--bbc-text) !important;
	border-color: var(--bbc-border) !important;
}

/* Footer */
#module_sequence_footer_container > [class$="-view"] {
	background: var(--bbc-surface) !important;
	color: var(--bbc-text) !important;
	border-color: var(--bbc-border) !important;
}

/* Button */
[data-cid*="BaseButton"] * {
	color: var(--bbc-text) !important;
}
[data-cid*="BaseButton"] img {
	filter: brightness(0) invert(1) !important;
}
[data-cid*="BaseButton"] > *,
.toggle_comments_link {
	background: var(--bbc-surface) !important;
	border-color: var(--bbc-border) !important;
}
[data-cid*="BaseButton"]:hover > *,
.toggle_comments_link {
	background: var(--bbc-surface-high) !important;
}

/* Input */
[class$="Input__facade"],
[class$="Input__afterElement"] {
	background: var(--bbc-surface) !important;
	color: var(--bbc-text) !important;
	border-color: var(--bbc-border) !important;
}
`;
})();
