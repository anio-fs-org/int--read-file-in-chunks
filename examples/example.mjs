import {readFileInChunks} from "../dist/default/index.mjs"
import {createHash} from "node:crypto"

const file = await readFileInChunks("./dist/default/index.mjs", 18)
const hash = createHash("sha256")

while (true) {
	const buffer = await file.readNextChunk()

	if (!buffer) break

	hash.update(buffer)
}

file.close()

hash.setEncoding("hex")
hash.end()

console.log(hash.read())
