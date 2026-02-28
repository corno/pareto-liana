import * as _pi from 'pareto-core/dist/interface'

import * as d_astn_ast from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

import * as d_schema from "../generated/liana/schemas/schema/data/resolved"

export type Document = {
    'content': Value
}

export type Entry_Data = {
    'id': d_astn_ast.Text
    'value': Optional_Value
}

export type Optional_Value = _pi.Optional_Value<Value>

// export type Key_Value_Pair = {
//     'node': Node
// }


export type Value = {
    'definition path': string
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
        'correct string type': boolean
    }]
    | ['invalid', d_astn_ast.Value]
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
    | ['invalid', d_astn_ast.Value]
}

export type Group = {
    'definition': d_schema.Value.group
    'found value type': Group_Found_Value_Type
}

export type Group_Found_Value_Type =
    | ['valid', {
        'instance':
        | ['group', d_astn_ast.Value.type_.concrete.group]
        | ['dictionary', d_astn_ast.Value.type_.concrete.dictionary]
        | ['list', d_astn_ast.Value.type_.concrete.list]
        'type': Group_Type
    }]
    | ['invalid', d_astn_ast.Value]

export type Group_Type =
    | ['verbose', Group_Verbose]
    | ['concise', Group_Concise]

export type Group_Concise = {
    'properties': _pi.Dictionary<_pi.Optional_Value<Value>>
    'superfluous properties': _pi.List<d_astn_ast.Items.L>
}

export type Possibly_Not_Set_Property = {
    'id value pair': d_astn_ast.ID_Value_Pairs.L
    'value': _pi.Optional_Value<Value>
}

export type Group_Verbose = {
    'properties': _pi.Dictionary<_pi.List<Possibly_Not_Set_Property>> //the list is used to support multiple entries with the same id (some possibly even without a value), which is an error
    'superfluous properties': _pi.Dictionary<_pi.List<d_astn_ast.ID_Value_Pairs.L>>
}

export type List = {
    'definition': d_schema.Value.list
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.list
        'items': _pi.List<Value>
    }]
    | ['invalid', d_astn_ast.Value]
}

export type Optional = {
    'definition': d_schema.Value.optional
    'found value type':
    | ['valid',
        | ['set', {
            'instance': d_astn_ast.Value.type_.concrete.optional.set_
            'child value': Value
        }]
        | ['not set', {
            'instance': d_astn_ast.Value.type_.concrete.nothing
        }]
    ]
    | ['invalid', d_astn_ast.Value]
}

export type Reference = {
    'definition': d_schema.Value.reference
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
    }] //FIXME
    | ['invalid', d_astn_ast.Value]
}

export type State = {
    'definition': d_schema.Value.state
    'found value type': State__found_value_type
}

export type State_Option_Processing =
    | ['success', {
        'option name': string
        'definition': d_schema.Value.state.options.D
        'value': Value
    }]
    | ['missing data', d_astn_ast.Structural_Token]
    | ['unknown option', {
        'token': d_astn_ast.Text
    }]
    | ['list format',
        | ['missing option item', null]
        | ['option item is not a text', {
            'value': d_astn_ast.Value
        }]
        | ['missing value item', null]
        | ['too many items', null]
    ]

export type State_found_value__type__valid = {
    'instance':
    | ['state', d_astn_ast.Value.type_.concrete.state]
    | ['list', d_astn_ast.Value.type_.concrete.list]
    'option processing': State_Option_Processing

}

export type State__found_value_type =
    | ['valid', State_found_value__type__valid]
    | ['invalid', d_astn_ast.Value]

export type Nothing = {
    'definition': d_schema.Value.nothing
    'found value type':
    | ['valid', {
        'value': d_astn_ast.Value.type_.concrete.nothing
    }]
    | ['invalid', d_astn_ast.Value]
}

export type Text = {
    'definition': d_schema.Value.text
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
    }]
    | ['invalid', d_astn_ast.Value]
}

export type Number = {
    'definition': d_schema.Value.number_
    'found value type':
    | ['valid', {
        'instance': d_astn_ast.Value.type_.concrete.text
        'correct string type': boolean
    }]
    | ['invalid', d_astn_ast.Value]
}

export type Entry =
    | ['unique', {
        'id value pair': d_astn_ast.ID_Value_Pairs.L
        'optional value': Optional_Value
    }]
    | ['multiple', {
        'occurences': _pi.List<Entry_Data>
    }]
