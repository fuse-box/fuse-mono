import {localHashTool} from "hash-tool"

document.addEventListener("DOMContentLoaded", () => {
	document.body.innerHTML += `
		A random hash: ${localHashTool(Math.random(), "FOO")}<br>
		(refresh to update)
	`;
});