import {readFileInChunksSyncFactory as factory} from "#~auto/export/readFileInChunksSyncFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"

const impl = factory()

export const readFileInChunksSync : ImplementationDocType = impl
