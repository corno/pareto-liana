    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/module/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../../interface/generated/liana/schemas/module/data/unresolved"
    
    import * as v_schema from "../../../schema/resolved/transformers/boilerplate_for_migrate"
    
    export const Module: t_signatures.Module = ($) => ({
        'omit (de)serializer': _p_change_context(
            $['omit (de)serializer'],
            ($) => $,
        ),
        'schema tree': _p_change_context(
            $['schema tree'],
            ($) => v_schema.Schema_Tree(
                $,
            ),
        ),
    })
