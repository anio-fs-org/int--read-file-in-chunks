import {generateAsyncSyncVariant} from "fourtune/autogenerate"

export default {
	realm: "js",
	type: "package:async/sync",

	autogenerate: {
		"src/export/ReadFileInChunksResult.d.mts": generateAsyncSyncVariant("src/template/ReadFileInChunksResult.d.mts", "async"),
		"src/export/ReadFileInChunksSyncResult.d.mts": generateAsyncSyncVariant("src/template/ReadFileInChunksResult.d.mts", "sync")
	},

	target: {
		function_name: "readFileInChunks"
	}
}
