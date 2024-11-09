/* define and describe your function api here */
import type {ReadFileInChunksResult} from "#~auto/export/ReadFileInChunksResult.d.mts"
//import type {ReadFileInChunksSyncResult} from "#~auto/export/ReadFileInChunksSyncResult.d.mts"

export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
       (file_path: string, chunk_size: number) : Promise<ReadFileInChunksResult>
//     (file_path: string, chunk_size: number) : ReadFileInChunksSyncResult
}
