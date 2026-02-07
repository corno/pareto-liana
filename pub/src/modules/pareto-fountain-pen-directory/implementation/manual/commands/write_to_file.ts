import * as _p from 'pareto-core/dist/command'
import * as _pt from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_change_context from 'pareto-core/dist/_p_change_context'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_write_to_file from "../../../interface/to_be_generated/write_to_file"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_loc from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

//dependencies
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import { replace_space_in_context_path } from "../schemas/path/transformers/path"
import * as t_paragraph_to_lines_of_characters from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/list_of_characters"

export const $$: signatures.commands.write_to_file = _p.command_procedure(
    ($p, $cr) => [
        $cr['make directory'].execute(
            $p['directory path'],
            ($): d_write_to_file.Error => ['make directory', $],
        ),
        $cr['write file'].execute(
            {
                'path': _p_change_context(
                    t_path_to_path.extend_node_path($p['directory path'], { 'addition': $p.filename }),
                    ($) => $p['escape spaces in path']
                        ? replace_space_in_context_path($)
                        : $,
                ),
                'data': t_paragraph_to_lines_of_characters.Paragraph(
                    $p.paragraph,
                    {
                        'indentation': $p.indentation,
                        'newline': $p.newline,
                    }
                ),
            },
            ($) => ['write file', $],
        )
    ]
)