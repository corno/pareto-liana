//core
import * as p_ from 'pareto-core/implementation/command'

//interface dependencies
import type * as command_interfaces_pareto_application_api from "pareto-application-api/interface/commands"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/modules/unrestricted/interface/commands"
import type * as command_interfaces_pareto_stream_api from "pareto-stream-api/interface/commands"

//schemas
import type * as s_main from "pareto-application-api/interface/schemas/main"
import type * as s_packages from "../../interface/schemas/packages.js"
import type * as s_serialize_schemas from "../../interface/schemas/schema_serialization.js"

//dependencies
import * as deser_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/deserializers/path"
import * as r_schema_resolved_from_unresolved from "../to_be_generated/refiners/schema/unresolved_manual.js"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/_implementation/transformers/paragraph/serialized"
import * as t_path_to_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/transformers/path/path"
import * as t_schema_to_paragraph from "../../modules/liana.generated/modules/schema/implementation/transformers/resolved/paragraph.js"
import * as t_serialize_schemas_to_paragraph from "../../implementation/transformers/serialize_schemas/paragraph.js"


export const $$: p_.Command_Implementation<
    command_interfaces_pareto_application_api.main,
    {
        'packages': s_packages.Packages
        'newline': string
        'indentation': string
    },
    null,
    {
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
        'log error lines': command_interfaces_pareto_stream_api.log_error_lines
    }
> = p_.command(
    ($d, $s, $q, $c) => [
        p_.s.dictionary(
            $s.packages,
            ($, id) => [

                p_.s.handle_error<s_main.Error, s_serialize_schemas.Error>(
                    [

                        p_.s.refine(
                            (abort) => r_schema_resolved_from_unresolved.Package(
                                $.package,
                                ($) => abort(['resolving', $]),
                                p_.literal.nothing(),
                                p_.literal.nothing(),
                            ),
                            ($v) => [
                                $c['write file'].execute(
                                    {
                                        'path': t_path_to_path.create_node_path(
                                            t_path_to_path.extend_context_path_with_single_step(
                                                deser_path.Context_Path($['target path']),
                                                {
                                                    'addition': "liana"
                                                }
                                            ),
                                            { 'node': "module.liana.lna" }
                                        ),
                                        // 'data': p_list_from_text(
                                        //     "IMPLEMENT SERIALIZATION HERE",
                                        //     ($) => $,
                                        // )
                                        'content': {
                                            'lines': t_paragraph_to_serialized.Paragraph(
                                                t_schema_to_paragraph.Package(
                                                    $v,
                                                ),
                                                {
                                                    'indentation': $s.indentation,
                                                }
                                            ),
                                            'parameters': {
                                                'newline': $s.newline,
                                            }
                                        },
                                    },
                                    ($) => ['error writing file', $]
                                )

                            ]
                        )
                    ],
                    ($) => [
                        $c['log error lines'].execute(
                            {
                                'lines': t_paragraph_to_serialized.Phrase(
                                    t_serialize_schemas_to_paragraph.Error(
                                        $,
                                        {
                                            'id': id,
                                        }
                                    ),
                                    {
                                        'indentation': $s.indentation
                                    }
                                )
                            },
                            ($) => ({
                                'exit code': 2,
                            })
                        )
                    ],
                    () => ({
                        'exit code': 2,
                    })
                )

            ],
            ($) => ({
                'exit code': 1
            })

        )
    ]
)