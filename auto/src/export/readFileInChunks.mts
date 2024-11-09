import {readFileInChunksFactory as factory} from "#~auto/export/readFileInChunksFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"

const impl = factory()

export const readFileInChunks : ImplementationDocType = impl
