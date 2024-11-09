/* define and describe your function api here */
import type {ReadFileInChunksResult} from "#~auto/export/ReadFileInChunksResult.d.mts"

/**
 * @brief Asynchronously read a file in chunks.
 * @description
 * Asynchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
       (file_path: string, chunk_size: number) : Promise<ReadFileInChunksResult>
}
