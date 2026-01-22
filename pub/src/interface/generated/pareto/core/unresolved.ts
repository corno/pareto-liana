import * as _pi from 'pareto-core/dist/interface'


// **** TYPES

export type _T_Derived_Reference<T_Type> = null

export type _T_Dictionary<T_D> = {
    readonly 'dictionary': _pi.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    readonly 'location': _pi.Deprecated_Source_Location
}

export type _T_List<T_L> = {
    readonly 'list': _pi.List<{
        readonly 'element': T_L
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    readonly 'location': _pi.Deprecated_Source_Location
}

export type _T_Ordered_Dictionary<T_D> = {
    readonly 'dictionary': _pi.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    readonly 'location': _pi.Deprecated_Source_Location
}

export type _T_Reference_To_Circular_Dependent_Sibling<T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': _pi.Deprecated_Source_Location
}

export type _T_Reference_To_Normal_Dictionary_Entry<T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': _pi.Deprecated_Source_Location
}

export type _T_Reference_To_Stacked_Dictionary_Entry<T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': _pi.Deprecated_Source_Location
}

export type _T_State_Group<T_SG> = {
    readonly 'location': _pi.Deprecated_Source_Location
    readonly 'state group': T_SG
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Derived_Reference<T_Type> = _T_Derived_Reference<T_Type>

export type Dictionary<T_D> = _T_Dictionary<T_D>

export type List<T_L> = _T_List<T_L>

export type Ordered_Dictionary<T_D> = _T_Ordered_Dictionary<T_D>

export type Reference_To_Circular_Dependent_Sibling<T_Dictionary_Entry> = _T_Reference_To_Circular_Dependent_Sibling<T_Dictionary_Entry>

export type Reference_To_Normal_Dictionary_Entry<T_Dictionary_Entry> = _T_Reference_To_Normal_Dictionary_Entry<T_Dictionary_Entry>

export type Reference_To_Stacked_Dictionary_Entry<T_Dictionary_Entry> = _T_Reference_To_Stacked_Dictionary_Entry<T_Dictionary_Entry>

export type State_Group<T_SG> = _T_State_Group<T_SG>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<T_D> = T_D
            export type location<T_D> = _pi.Deprecated_Source_Location
        }
        export type D<T_D> = {
            readonly 'entry': T_D
            readonly 'location': _pi.Deprecated_Source_Location
        }
    }
    export type dictionary<T_D> = _pi.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    export type location<T_D> = _pi.Deprecated_Source_Location
}

export namespace _T_List {
    
    export namespace list {
        
        export namespace L {
            export type element<T_L> = T_L
            export type location<T_L> = _pi.Deprecated_Source_Location
        }
        export type L<T_L> = {
            readonly 'element': T_L
            readonly 'location': _pi.Deprecated_Source_Location
        }
    }
    export type list<T_L> = _pi.List<{
        readonly 'element': T_L
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    export type location<T_L> = _pi.Deprecated_Source_Location
}

export namespace _T_Ordered_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<T_D> = T_D
            export type location<T_D> = _pi.Deprecated_Source_Location
        }
        export type D<T_D> = {
            readonly 'entry': T_D
            readonly 'location': _pi.Deprecated_Source_Location
        }
    }
    export type dictionary<T_D> = _pi.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    export type location<T_D> = _pi.Deprecated_Source_Location
}

export namespace _T_Reference_To_Circular_Dependent_Sibling {
    export type key<T_Dictionary_Entry> = string
    export type location<T_Dictionary_Entry> = _pi.Deprecated_Source_Location
}

export namespace _T_Reference_To_Normal_Dictionary_Entry {
    export type key<T_Dictionary_Entry> = string
    export type location<T_Dictionary_Entry> = _pi.Deprecated_Source_Location
}

export namespace _T_Reference_To_Stacked_Dictionary_Entry {
    export type key<T_Dictionary_Entry> = string
    export type location<T_Dictionary_Entry> = _pi.Deprecated_Source_Location
}

export namespace _T_State_Group {
    export type location<T_SG> = _pi.Deprecated_Source_Location
    export type state_group<T_SG> = T_SG
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<T_D> = T_D
            export type location<T_D> = _pi.Deprecated_Source_Location
        }
        export type D<T_D> = {
            readonly 'entry': T_D
            readonly 'location': _pi.Deprecated_Source_Location
        }
    }
    export type dictionary<T_D> = _pi.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    export type location<T_D> = _pi.Deprecated_Source_Location
}

export namespace List {
    
    export namespace list {
        
        export namespace L {
            export type element<T_L> = T_L
            export type location<T_L> = _pi.Deprecated_Source_Location
        }
        export type L<T_L> = {
            readonly 'element': T_L
            readonly 'location': _pi.Deprecated_Source_Location
        }
    }
    export type list<T_L> = _pi.List<{
        readonly 'element': T_L
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    export type location<T_L> = _pi.Deprecated_Source_Location
}

export namespace Ordered_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<T_D> = T_D
            export type location<T_D> = _pi.Deprecated_Source_Location
        }
        export type D<T_D> = {
            readonly 'entry': T_D
            readonly 'location': _pi.Deprecated_Source_Location
        }
    }
    export type dictionary<T_D> = _pi.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': _pi.Deprecated_Source_Location
    }>
    export type location<T_D> = _pi.Deprecated_Source_Location
}

export namespace Reference_To_Circular_Dependent_Sibling {
    export type key<T_Dictionary_Entry> = string
    export type location<T_Dictionary_Entry> = _pi.Deprecated_Source_Location
}

export namespace Reference_To_Normal_Dictionary_Entry {
    export type key<T_Dictionary_Entry> = string
    export type location<T_Dictionary_Entry> = _pi.Deprecated_Source_Location
}

export namespace Reference_To_Stacked_Dictionary_Entry {
    export type key<T_Dictionary_Entry> = string
    export type location<T_Dictionary_Entry> = _pi.Deprecated_Source_Location
}

export namespace State_Group {
    export type location<T_SG> = _pi.Deprecated_Source_Location
    export type state_group<T_SG> = T_SG
}
