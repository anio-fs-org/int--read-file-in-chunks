export default [{
	file: "./src/template.mjs",
	items: {
		"export default async function": "export default function",
		"await fs_object.openFile(": "fs_object.openFile(",
		"await file.read(": "file.read(",
		"await file.close()": "file.close()",
		"async readNextChunk() {": "readNextChunk() {",
		"async close() {": "close() {"
	},
	output: "./src/auto/sync.mjs"
}, {
	file: "./src/template.mjs",
	items: {},
	output: "./src/auto/async.mjs"
}]
