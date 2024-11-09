/* define and describe your function api here */
import type {ReadFileInChunksSyncResult} from "#~auto/export/ReadFileInChunksSyncResult.d.mts"

/**
 * @brief Synchronously read a file in chunks.
 * @description
 * Synchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
     (file_path: string, chunk_size: number) : ReadFileInChunksSyncResult
}
