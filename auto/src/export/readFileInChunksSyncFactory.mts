import {
	getProjectPackageJSON,
	getFourtuneConfiguration
} from "@fourtune/realm-js/v0/project"

import type {UserContext} from "@fourtune/realm-js/v0/runtime"
import {useContext} from "@fourtune/realm-js/v0/runtime"

import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import implementation from "#~auto/implementationSync.mts"

/* needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"


/* ImplementationDocType is needed to make doctypes work in LSP */
export function readFileInChunksSyncFactory(user : UserContext = {}) : ImplementationDocType {
	const project = {
		package_json: getProjectPackageJSON(),
		fourtune_configuration: getFourtuneConfiguration()
	}

	const context = useContext(project, user)

	const dependencies : DependenciesType = {}

	return function readFileInChunksSync(...args: Parameters<ImplementationDocType>) : ReturnType<ImplementationDocType> {
		return implementation(context, dependencies, ...args)
	}
}
