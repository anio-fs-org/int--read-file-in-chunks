import {generateFromTemplate} from "vipen/autogenerate"

const asyncToSync = {
	"import {openFile} from \"@anio-fs/api/async\"": "import {openFile} from \"@anio-fs/api/sync\"",
	"export default async function": "export default function",
	"await openFile(": "openFile(",
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
