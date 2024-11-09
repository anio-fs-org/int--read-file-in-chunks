export type ReadFileInChunksResult = {
//export type ReadFileInChunksSyncResult = {

	readNextChunk(): Promise<Buffer|false>
//	readNextChunk(): Buffer|false

	close() : Promise<void>
//	close() : void
}
