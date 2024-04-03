import fs from "@anio-fs/api"

import sync_impl from "./auto/sync.mjs"
import async_impl from "./auto/async.mjs"

export function readFileInChunks(path, chunk_size) {
	return async_impl(fs.async, path, chunk_size)
}

export function readFileInChunksSync(path, chunk_size) {
	return sync_impl(fs.sync, path, chunk_size)
}
