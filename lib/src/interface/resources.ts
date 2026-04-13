import * as _pi from 'pareto-core/dist/interface'

import * as d_generate_typescript from "./to_be_generated/generate_typescript"


export namespace commands {

    export type generate_typescript = _pi.Command<
        d_generate_typescript.Error,
        d_generate_typescript.Parameters
    >
}