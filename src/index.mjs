import createFSObject from "@anio-node-foundation/fs-api"

import sync_impl from "./auto/sync.mjs"
import async_impl from "./auto/async.mjs"

const async_fs = createFSObject({sync: false})
const sync_fs = createFSObject({sync: true})

function nodeFsReadFileInChunks(path, chunk_size) {
	return async_impl(async_fs, path, chunk_size)
}

nodeFsReadFileInChunks.sync = function(path, chunk_size) {
	return sync_impl(sync_fs, path, chunk_size)
}

export default nodeFsReadFileInChunks
