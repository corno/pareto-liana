import * as _pi from 'pareto-core/dist/interface'

import * as d_astn_token from "astn-core/dist/interface/generated/liana/schemas/token/data"
import * as d_astn_ast from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

import * as d_schema from "../generated/liana/schemas/schema/data/resolved"

export type Document = {
    'content': Node
}

export type Entry_Data = {
    'id': d_astn_ast.Text
    'node': Optional_Node
}

export type Optional_Node = _pi.Optional_Value<Node>

// export type Key_Value_Pair = {
//     'node': Node
// }

export type Property =
    | ['missing', d_astn_token.Range]
    | ['unique', Entry_Data]
    | ['multiple', _pi.List<Entry_Data>]

export type Node = {
    'definition': d_schema.Type_Node
    'value': d_astn_ast.Value
    'type': Node_Type //the type is determined by the definition
}

export type Node_Type =
    | ['boolean', Boolean]
    | ['component', Component]
    | ['dictionary', Dictionary]
    | ['group', Group]
    | ['list', List]
    | ['nothing', Nothing]
    | ['number', Number]
    | ['optional', Optional]
    | ['reference', Reference]
    | ['state', State]
    | ['text', Text]


export type Boolean = {
    'definition': d_schema.Type_Node.boolean_
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.text
        'range': d_astn_token.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_token.Range]
}

export type Component = {
    'definition': d_schema.Type_Node.component
    'node': Node
}

export type Dictionary = {
    'definition': d_schema.Type_Node.dictionary
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.dictionary
        'entries': _pi.Dictionary<Entry>
    }]
    | ['invalid', d_astn_token.Range]
}

export type Group = {
    'definition': d_schema.Type_Node.group
    'found value type': Group_Found_Value_Type
}

export type Group_Found_Value_Type =
    | ['valid', Group_Type]
    | ['invalid', d_astn_token.Range]

export type Group_Type =
    | ['verbose', Group_Verbose]
    | ['concise', Group_Concise]

export type Group_Concise = {
    'value': d_astn_ast.Value.type_.concrete.group.concise
    'content': Group_Content
}

export type Group_Verbose = {
    'value': d_astn_ast.Value.type_.concrete.group.verbose
    'content': Group_Content
}

export type Group_Content = {
    'properties': _pi.Dictionary<Property>
    'superfluous entries': _pi.Dictionary<_pi.List<d_astn_token.Range>>

}

export type List = {
    'definition': d_schema.Type_Node.list
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.list
        'elements': _pi.List<Node>
    }]
    | ['invalid', d_astn_token.Range]
}

export type Optional = {
    'definition': d_schema.Type_Node.optional
    'found value type':
    | ['valid',
        | ['set', {
            'value': d_astn_ast.Value.type_.concrete.optional.set_
            'child node': Node
        }]
        | ['not set', {
            'value': d_astn_ast.Value.type_.concrete.nothing
        }]
    ]
    | ['invalid', d_astn_token.Range]
}

export type Reference = {
    'definition': d_schema.Type_Node.reference
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.text
    }] //FIXME
    | ['invalid', d_astn_token.Range]
}

export type State = {
    'definition': d_schema.Type_Node.state
    'found value type': State_found_value_type
}

export type State_Definition_Found = {
    'definition': d_schema.Type_Node.state.D
    'node': Node
}

export type State_found_value__typevalid_value__typeSG_state = {
    'value substatus': State_found_value__typevalid_value__typeSG_state_value_substatus
}

export type State_found_value__typevalid_value__typeSG_state_value_substatus =
    | ['missing data', d_astn_ast.Structural_Token]
    | ['set', State_found_value__typevalid_value__typeSG_state_value_substatus_SG_set]

export type State_found_value__typevalid_value__typeSG_state_value_substatus_SG_set = {
    'value': d_astn_ast.Value.type_.concrete.state.status.set_
    'found state definition': _pi.Optional_Value<State_Definition_Found>
}

export type State_found_value__typevalid = {
    'value type':
    | ['state', State_found_value__typevalid_value__typeSG_state]
    // | ['polyfill', { -> [ "state_name", ... ]
    //     'xx': {
    //         'node': Node,

    //     }
    // }]
}

export type State_found_value_type =
    | ['valid', State_found_value__typevalid]
    | ['invalid', d_astn_token.Range]

// export type State_Error =
//     | ['more than 2 elements', d_astn_token.Range]
//     | ['missing state name', d_astn_token.Range]
//     | ['state is not a string', d_astn_token.Range]
//     | ['missing value', d_astn_token.Range]
//     | ['unknown state', {
//         'range': d_astn_token.Range
//         'found': string
//         'expected': pt.Dictionary<null>
//     }]


export type Nothing = {
    'definition': d_schema.Type_Node.nothing
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.nothing
    }]
    | ['invalid', d_astn_token.Range]
}

export type Text = {
    'definition': d_schema.Type_Node.text
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.text
    }]
    | ['invalid', d_astn_token.Range]
}

export type Number = {
    'definition': d_schema.Type_Node.number_
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.text
        'range': d_astn_token.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_token.Range]
}

export type Entry =
    | ['unique', Optional_Node]
    | ['multiple', _pi.List<Entry_Data>]
