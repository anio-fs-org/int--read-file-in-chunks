import {openFile} from "@anio-fs/api/sync"

export default function(file_path, chunk_size) {
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
