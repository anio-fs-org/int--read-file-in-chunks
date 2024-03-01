export default async function(fs_object, file_path, chunk_size) {
	const file = await fs_object.openFile(file_path, "r")
	let closed = false

	return {
		async readNextChunk() {
			if (closed) return false

			let chunk_buffer = Buffer.alloc(chunk_size)

			const bytes_read = await file.read(chunk_buffer)

			if (!bytes_read) {
				if (!closed) await file.close()

				closed = true

				return false
			}

			return chunk_buffer.subarray(0, bytes_read)
		},

		async close() {
			if (closed) return

			await file.close()
			closed = true
		}
	}
}
