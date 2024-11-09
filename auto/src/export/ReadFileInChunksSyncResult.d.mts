export type ReadFileInChunksSyncResult = {

	readNextChunk(): Buffer|false

	close() : void
}
