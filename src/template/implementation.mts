/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesType.d.mts"
//import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"
//import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import {openFile} from "@anio-fs/api/async"
//import {openFile} from "@anio-fs/api/sync"

export default async function(
//export default function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	file_path: string,
	chunk_size: number
) : ReturnType<ImplementationDocType> {

	const file = await openFile(file_path, "r")
//	const file = openFile(file_path, "r")

	let closed = false

	return {
		async readNextChunk() {
//		readNextChunk() {
			if (closed) return false

			let chunk_buffer = Buffer.alloc(chunk_size)

			const bytes_read = await file.read(chunk_buffer)
//			const bytes_read = file.read(chunk_buffer)

			context.log.trace(
				`read ${bytes_read} bytes from file ${file_path}`
			)

			if (!bytes_read) {
				if (!closed) await file.close()
//				if (!closed) file.close()

				closed = true

				return false
			}

			return chunk_buffer.subarray(0, bytes_read)
		},

		async close() {
//		close() {
			if (closed) return

			await file.close()
//			file.close()

			closed = true
		}
	}

}
