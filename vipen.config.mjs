import {generateFromTemplate} from "vipen/autogenerate"

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

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
