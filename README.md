# @anio-node-foundation/fs-read-file-in-chunks

Read a file in chunks asynchronously or synchronously.

```js
import nodeFsReadFileInChunks from "@anio-node-foundation/fs-read-file-in-chunks"
import {createHash} from "node:crypto"

const file = await nodeFsReadFileInChunks("./src/index.mjs", 18)
const hash = createHash("sha256")

while (true) {
	const buffer = await file.readNextChunk()

	if (!buffer) break

	hash.update(buffer)
}

await file.close()

hash.setEncoding("hex")
hash.end()

console.log(hash.read())
```
