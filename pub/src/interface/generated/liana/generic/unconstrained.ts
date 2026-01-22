import * as _pi from 'pareto-core/dist/interface'


// **** TYPES

export type _T_Dictionary<T_D> = _pi.Dictionary<T_D>

export type _T_List<T_L> = _pi.List<T_L>

export type _T_State_Group<T_SG> = T_SG

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Dictionary<T_D> = _T_Dictionary<T_D>

export type List<T_L> = _T_List<T_L>

export type State_Group<T_SG> = _T_State_Group<T_SG>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    export type D<T_D> = T_D
}

export namespace _T_List {
    export type L<T_L> = T_L
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    export type D<T_D> = T_D
}

export namespace List {
    export type L<T_L> = T_L
}
