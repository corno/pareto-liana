import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../interface/to_be_generated/load_pareto_file"

export type Error = _pi.Serializer<d_in.Error>

//dependencies
import * as t_to_fountain_pen from "./transformers/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"

export const Error: Error = ($) => s_fp.Block_Part(
    t_to_fountain_pen.Error($),
    {
        'indentation': `    `,
        'newline': '\n',
    }
)