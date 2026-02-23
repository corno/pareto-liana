import * as _pi from 'pareto-core/dist/interface'

import * as d_astn_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_astn_ast from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

import * as d_schema from "../generated/liana/schemas/schema/data/resolved"

export type Document = {
    'content': Value
}

export type Entry_Data = {
    'id': d_astn_ast.Text
    'node': Optional_Node
}

export type Optional_Node = _pi.Optional_Value<Value>

// export type Key_Value_Pair = {
//     'node': Node
// }

export type Property =
    | ['missing', d_astn_location.Range]
    | ['unique', Entry_Data]
    | ['multiple', _pi.List<Entry_Data>]

export type Value = {
    'definition': d_schema.Value
    'instance': d_astn_ast.Value
    'unmarshalled': Unmarshalled_Value_Type //the type is determined by the definition
}

export type Unmarshalled_Value_Type =
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
    'definition': d_schema.Value.boolean_
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
        // 'parsed': _pi.Optional_Value<boolean>
        'range': d_astn_location.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_location.Range]
}

export type Component = {
    'definition': d_schema.Value.component
    'value': Value
}

export type Dictionary = {
    'definition': d_schema.Value.dictionary
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.dictionary
        'entries': _pi.Dictionary<Entry>
    }]
    | ['invalid', d_astn_location.Range]
}

export type Group = {
    'definition': d_schema.Value.group
    'found value type': Group_Found_Value_Type
}

export type Group_Found_Value_Type =
    | ['valid', Group_Type]
    | ['invalid', d_astn_location.Range]

export type Group_Type =
    | ['verbose', Group_Verbose]
    | ['concise', Group_Concise]

export type Group_Concise = {
    'instance': d_astn_ast.Value.type_.concrete.group.concise
    'content': Group_Content
}

export type Group_Verbose = {
    'instance': d_astn_ast.Value.type_.concrete.group.verbose
    'content': Group_Content
}

export type Group_Content = {
    'properties': _pi.Dictionary<Property>
    'superfluous entries': _pi.Dictionary<_pi.List<d_astn_location.Range>>

}

export type List = {
    'definition': d_schema.Value.list
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.list
        'elements': _pi.List<Value>
    }]
    | ['invalid', d_astn_location.Range]
}

export type Optional = {
    'definition': d_schema.Value.optional
    'found value type':
    | ['valid',
        | ['set', {
            'instance': d_astn_ast.Value.type_.concrete.optional.set_
            'child node': Value
        }]
        | ['not set', {
            'instance': d_astn_ast.Value.type_.concrete.nothing
        }]
    ]
    | ['invalid', d_astn_location.Range]
}

export type Reference = {
    'definition': d_schema.Value.reference
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
    }] //FIXME
    | ['invalid', d_astn_location.Range]
}

export type State = {
    'definition': d_schema.Value.state
    'found value type': State__found_value_type
}

export type Option_Definition_Found = {
    'definition': d_schema.Value.state.options.D
    'node': Value
}

export type Option_found_value__typevalid_value__typeSG_state = {
    'value substatus': Option_found_value__typevalid_value__typeSG_state_value_substatus
}

export type Option_found_value__typevalid_value__typeSG_state_value_substatus =
    | ['missing data', d_astn_ast.Structural_Token]
    | ['set', Option_found_value__typevalid_value__typeSG_state_value_substatus_SG_set]

export type Option_found_value__typevalid_value__typeSG_state_value_substatus_SG_set = {
    'instance': d_astn_ast.Value.type_.concrete.state.status.set_
    'found option definition': _pi.Optional_Value<Option_Definition_Found>
}

export type Option_found_value__typevalid = {
    'value type':
    | ['state', Option_found_value__typevalid_value__typeSG_state]
    // | ['polyfill', { -> [ "state_name", ... ]
    //     'xx': {
    //         'node': Node,

    //     }
    // }]
}

export type State__found_value_type =
    | ['valid', Option_found_value__typevalid]
    | ['invalid', d_astn_location.Range]

// export type State_Error =
//     | ['more than 2 elements', d_astn_location.Range]
//     | ['missing state name', d_astn_location.Range]
//     | ['state is not a string', d_astn_location.Range]
//     | ['missing value', d_astn_location.Range]
//     | ['unknown state', {
//         'range': d_astn_location.Range
//         'found': string
//         'expected': pt.Dictionary<null>
//     }]


export type Nothing = {
    'definition': d_schema.Value.nothing
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.nothing
    }]
    | ['invalid', d_astn_location.Range]
}

export type Text = {
    'definition': d_schema.Value.text
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
    }]
    | ['invalid', d_astn_location.Range]
}

export type Number = {
    'definition': d_schema.Value.number_
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
        'range': d_astn_location.Range
        'correct string type': boolean
    }]
    | ['invalid', d_astn_location.Range]
}

export type Entry =
    | ['unique', Optional_Node]
    | ['multiple', _pi.List<Entry_Data>]
