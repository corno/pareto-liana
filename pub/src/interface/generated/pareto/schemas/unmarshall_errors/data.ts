
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

export namespace Relative_Location_ {
    
    export type line = number
    
    export type column = number
    
}

export type Relative_Location_ = {
    readonly 'line': Relative_Location_.line
    readonly 'column': Relative_Location_.column
}

export namespace Location_ {
    
    export type relative = Relative_Location_
    
    export type absolute = number
    
}

export type Location_ = {
    readonly 'relative': Location_.relative
    readonly 'absolute': Location_.absolute
}

export namespace Range_ {
    
    export type start = Location_
    
    export type end = Location_
    
}

export type Range_ = {
    readonly 'start': Range_.start
    readonly 'end': Range_.end
}

export namespace Errors_ {
    
    export namespace L {
        
        export type range = Range_
        
        export namespace _type {
            
            export namespace error {
                
                export namespace invalid_value_type {
                    
                    export namespace expected {
                        
                        export namespace L {
                            
                            export type text = null
                            
                            export type verbose_group = null
                            
                            export type concise_group = null
                            
                            export type dictionary = null
                            
                            export type not_set = null
                            
                            export type _set = null
                            
                            export type list = null
                            
                            export type state = null
                            
                        }
                        
                        export type L = 
                            | readonly ['text', L.text]
                            | readonly ['verbose group', L.verbose_group]
                            | readonly ['concise group', L.concise_group]
                            | readonly ['dictionary', L.dictionary]
                            | readonly ['not set', L.not_set]
                            | readonly ['set', L._set]
                            | readonly ['list', L.list]
                            | readonly ['state', L.state]
                        
                    }
                    
                    export type expected = _pi.List<expected.L>
                    
                }
                
                export type invalid_value_type = {
                    readonly 'expected': invalid_value_type.expected
                }
                
                export namespace duplicate_property {
                    
                    export type name = string
                    
                }
                
                export type duplicate_property = {
                    readonly 'name': duplicate_property.name
                }
                
                export namespace missing_property {
                    
                    export type name = string
                    
                }
                
                export type missing_property = {
                    readonly 'name': missing_property.name
                }
                
                export namespace superfluous_property {
                    
                    export type name = string
                    
                }
                
                export type superfluous_property = {
                    readonly 'name': superfluous_property.name
                }
                
                export namespace state {
                    
                    export type more_than_2_elements = null
                    
                    export type missing_state_name = null
                    
                    export type state_is_not_a_string = null
                    
                    export type missing_value = null
                    
                    export namespace unknown_state {
                        
                        export type found = string
                        
                        export namespace expected {
                            
                            export type D = null
                            
                        }
                        
                        export type expected = _pi.Dictionary<expected.D>
                        
                    }
                    
                    export type unknown_state = {
                        readonly 'found': unknown_state.found
                        readonly 'expected': unknown_state.expected
                    }
                    
                    export type missing_data_marker = null
                    
                }
                
                export type state = 
                    | readonly ['more than 2 elements', state.more_than_2_elements]
                    | readonly ['missing state name', state.missing_state_name]
                    | readonly ['state is not a string', state.state_is_not_a_string]
                    | readonly ['missing value', state.missing_value]
                    | readonly ['unknown state', state.unknown_state]
                    | readonly ['missing data marker', state.missing_data_marker]
                
            }
            
            export type error = 
                | readonly ['invalid value type', error.invalid_value_type]
                | readonly ['duplicate property', error.duplicate_property]
                | readonly ['missing property', error.missing_property]
                | readonly ['superfluous property', error.superfluous_property]
                | readonly ['state', error.state]
            
            export namespace warning {
                
                export type expected_apostrophed_string = null
                
                export type expected_quoted_string = null
                
                export type expected_backticked_string = null
                
                export type expected_undelimited_string = null
                
            }
            
            export type warning = 
                | readonly ['expected apostrophed string', warning.expected_apostrophed_string]
                | readonly ['expected quoted string', warning.expected_quoted_string]
                | readonly ['expected backticked string', warning.expected_backticked_string]
                | readonly ['expected undelimited string', warning.expected_undelimited_string]
            
        }
        
        export type _type = 
            | readonly ['error', _type.error]
            | readonly ['warning', _type.warning]
        
    }
    
    export type L = {
        readonly 'range': L.range
        readonly 'type': L._type
    }
    
}

export type Errors_ = _pi.List<Errors_.L>

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
    Errors_ as Errors, 
}
