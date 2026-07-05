import * as sh from 'pareto-core-shorthands/unresolved_data'

import * as d_target from "../../interface/generated/liana/schemas/schema/data/unresolved.js"


export const signatures = (
    signatures: sh.Raw_Or_Normal_Dictionary<d_target.Resolver_Signatures.l_dictionary.D.l_entry>,
): d_target.Resolver.signatures => {
    return {
        'signatures': sh.dictionary(signatures)
    }
}

export const sig_params = (
    modules: sh.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry>,
    lookups: sh.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry>,
): d_target.Resolver_Signature_Parameters => {
    return {
        'modules': sh.dictionary(modules),
        'lookups': sh.dictionary(lookups),
    }
}

/**
 * signature
 */
export namespace sig {

    export const local = (
        modules: sh.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry>,
        lookups: sh.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Signatures.l_dictionary.D.l_entry => {
        return {
            'module': null,
            'parameters': sh.state(['local', {
                'modules': sh.dictionary(modules),
                'lookups': sh.dictionary(lookups),
            }]),
            'resolved parameters': null,
        }
    }

    export const same_as = (
        name: string
    ): d_target.Resolver_Signatures.l_dictionary.D.l_entry => {
        return {
            'module': null,
            'parameters': sh.state(['same as', sh.reference(name)]),
            'resolved parameters': null,
        }
    }
}

export namespace parameter {


    export const module = (
        name: string,
        presence?: 'optional' | 'required',
    ): d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry => {
        return {
            'module': {
                'location': sh.state(['internal', sh.reference(name)]),
                'resulting module': null,
            },
            'presence': presence === 'optional'
                ? sh.state(['optional', null])
                : sh.state(['required', null]),
        }
    }
    export const module_external = (
        imp: string,
        type: string,
        presence?: 'optional' | 'required',
    ): d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry => {
        return {
            'module': {
                'location': sh.state(['external', {
                    'import': sh.reference(imp),
                    'module': sh.reference(type),
                }]),
                'resulting module': null,
            },
            'presence': presence === 'optional'
                ? sh.state(['optional', null])
                : sh.state(['required', null]),
        }
    }

    export const lookup = (
        name: string,
        type?: 'acyclic' | 'cyclic' | 'stack',
        presence?: 'optional' | 'required',
    ): d_target.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry => {
        return {
            'referent': {
                'location': sh.state(['internal', sh.reference(name)]),
                'resulting module': null,
            },
            'dictionary': null,
            'type': type === 'cyclic'
                ? sh.state(['cyclic', null])
                : type === 'stack'
                    ? sh.state(['stack', null])
                    : sh.state(['acyclic', null]),
            'presence': presence === 'optional'
                ? sh.state(['optional', null])
                : sh.state(['required', null]),
        }
    }


}