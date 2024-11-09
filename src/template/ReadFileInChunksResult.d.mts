export type ReadFileInChunksResult = {
//export type ReadFileInChunksSyncResult = {

	/**
	 * @brief Asynchronously reads the next chunk.
//	 * @brief Synchronously reads the next chunk.
	 */
	readNextChunk(): Promise<Buffer|false>
//	readNextChunk(): Buffer|false

	/**
	 * @brief Asynchronously closes the file.
//	 * @brief Synchronously closes the file.
	 */
	close() : Promise<void>
//	close() : void
}
