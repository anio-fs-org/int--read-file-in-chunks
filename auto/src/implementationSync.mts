/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import {openFile} from "@anio-fs/api/sync"

export default function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	file_path: string,
	chunk_size: number
) : ReturnType<ImplementationDocType> {

	const file = openFile(file_path, "r")

	let closed = false

	return {
		readNextChunk() {
			if (closed) return false

			let chunk_buffer = Buffer.alloc(chunk_size)

			const bytes_read = file.read(chunk_buffer)

			if (!bytes_read) {
				if (!closed) file.close()

				closed = true

				return false
			}

			return chunk_buffer.subarray(0, bytes_read)
		},

		close() {
			if (closed) return

			file.close()

			closed = true
		}
	}

}
