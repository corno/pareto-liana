    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/unmarshall_errors/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Errors: t_signatures.Errors = ($) => v_serialize.Document(
        v_marshall.Errors(
            $,
        ),
    )
    
    export const Location: t_signatures.Location = ($) => v_serialize.Document(
        v_marshall.Location(
            $,
        ),
    )
    
    export const Relative_Location: t_signatures.Relative_Location = ($) => v_serialize.Document(
        v_marshall.Relative_Location(
            $,
        ),
    )
    
    export const Range: t_signatures.Range = ($) => v_serialize.Document(
        v_marshall.Range(
            $,
        ),
    )
