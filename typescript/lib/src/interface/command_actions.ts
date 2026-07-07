import * as p_ from 'pareto-core/interface/command_action'

//data types
import * as d_generate_typescript from "./data/generate_typescript.js"



    export type generate_typescript = p_.Command_Action<
        d_generate_typescript.Error,
        d_generate_typescript.Parameters
    >