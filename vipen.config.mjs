import {searchAndReplace, copyFile} from "vipen/processing"

const asyncToSync = {
	"export default async function": "export default function",
	"await fs_object.openFile(": "fs_object.openFile(",
	"await file.read(": "file.read(",
	"await file.close()": "file.close()",
	"async readNextChunk() {": "readNextChunk() {",
	"async close() {": "close() {"
}

export default {
	realm: "js",
	type: "package",

	preprocessing: [
		searchAndReplace("src/template.mjs", asyncToSync, "src/auto/sync.mjs"),
		copyFile("src/template.mjs", "src/auto/async.mjs")
	]
}
