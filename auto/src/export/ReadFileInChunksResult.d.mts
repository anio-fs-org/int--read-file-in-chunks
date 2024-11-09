export type ReadFileInChunksResult = {

	readNextChunk(): Promise<Buffer|false>

	close() : Promise<void>
}
