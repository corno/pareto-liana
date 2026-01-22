import * as _pi from 'pareto-core/dist/interface'

import * as resources from "./resources"
import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_fountain_pen from "../modules/pareto-fountain-pen-directory/interface/resources"

export namespace queries {

    export type load_pareto_document = _pi.Query_Function<resources.queries.load_pareto_document, {
        'read file': resources_pareto.queries.read_file
    }>

    export type load_pareto_file = _pi.Query_Function<resources.queries.load_pareto_file, {
        'read file': resources_pareto.queries.read_file
    }>

}

export namespace commands {

    export type compile_temp_schemas = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'copy': resources_pareto.commands.copy
            'log': resources_pareto.commands.log
            'log error': resources_pareto.commands.log_error
            'make directory': resources_pareto.commands.make_directory
            'remove': resources_pareto.commands.remove
            'write to directory': resources_fountain_pen.commands.write_to_directory
        },
        null
    >


    export type seal = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'log error': resources_pareto.commands.log_error
        },
        null
    >


    export type serialize_schemas = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'write file': resources_pareto.commands.write_file
        },
        null
    >

}