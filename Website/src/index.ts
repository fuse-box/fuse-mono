import {localHashTool} from "hash-tool";
import { helloWorld } from "path1";


document.addEventListener("DOMContentLoaded", () => {
	document.title = helloWorld;
	document.body.innerHTML += `
		A random hash: ${localHashTool(Math.random(), "FOO")}<br>
		(refresh to update)
	`;
});