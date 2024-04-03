declare type AsyncReadFileInChunksObject = {
	/**
	 * @brief Asynchronously reads the next chunk.
	 */
	readNextChunk() : Promise<Buffer>;
	/**
	 * @brief Asynchronously closes the file.
	 */
	close() : Promise<void>;
};

/**
 * @brief Asynchronously read a file in chunks.
 * @description
 * Asynchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export function readFileInChunks(path : string, chunk_size : number) : Promise<AsyncReadFileInChunksObject>

declare type SyncReadFileInChunksObject = {
	/**
	 * @brief Synchronously reads the next chunk.
	 */
	readNextChunk() : Buffer;
	/**
	 * @brief Synchronously closes the file.
	 */
	close() : void;
};

/**
 * @brief Synchronously read a file in chunks.
 * @description
 * Synchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export function readFileInChunksSync(path : string, chunk_size : number) : SyncReadFileInChunksObject
