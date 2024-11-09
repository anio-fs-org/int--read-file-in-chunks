/* define and describe your function api here */
import type {ReadFileInChunksResult} from "#~auto/export/ReadFileInChunksResult.d.mts"

export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
       (file_path: string, chunk_size: number) : Promise<ReadFileInChunksResult>
}
