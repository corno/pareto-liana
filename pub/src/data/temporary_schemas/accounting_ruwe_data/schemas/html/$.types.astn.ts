import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Phrasing content": type(t.list(t.state_group({
            "text": tstate(t.text_global("TBD")),
            "element": tstate(t.component_cyclic("Phrasing")),
        }))),

        "Flow content": type(t.list(t.state_group({
            "phrase": tstate(t.component("Phrasing content")),
            "flow": tstate(t.component_cyclic("Flow")),
        }))),

        /*
        Elements to do:
        summary (details)
    
        dl:
        dd
        dt
    
        legend (fieldset)
    
        li (list/menu)
    
        media:
        track
    
        meta:
        style
    
        source (picture/mediaelement)
    
        ruby:
        rp
        rt
    
        select:
        optgroup
        option
    
        table:
        caption
        col
        colgroup
        tbody
        td
        tfoot
        th
        thead
        tr
        */

        "Document": type(t.group({
            "lang": prop(t.optional(t.text_global("TBD"))),
            "head": prop(t.group({
                "title": prop(t.text_global("TBD"))
            })),
            "body": prop(t.component("Flow content"))
        })),

        "Edit": type(t.group({
            "cite": prop(t.optional(t.text_global("TBD"))),
            "datetime": prop(t.optional(t.text_global("TBD"))),
        })),

        "Embedded": type(t.state_group({
            "audio": tstate(t.group({
                /*FIXME*/
                // If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                // If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "embed": tstate(t.group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of embedded resource
                // width — Horizontal dimension
                // height — Vertical dimension
                // Any other attribute that has no namespace (see prose).
            })),
            "iframe": tstate(t.group({
                /*FIXME*/
                // src — Address of the resource
                // srcdoc — A document to render in the iframe
                // name — Name of content navigable
                // sandbox — Security rules for nested content
                // allow — Permissions policy to be applied to the iframe's contents
                // allowfullscreen — Whether to allow the iframe's contents to use requestFullscreen()
                // width — Horizontal dimension
                // height — Vertical dimension
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // loading — Used when determining loading deferral
            })),
            "img": tstate(t.group({
                /*FIXME*/
                // alt — Replacement text for use when images are not available
                // src — Address of the resource
                // srcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc.
                // sizes — Image sizes for different page layouts
                // crossorigin — How the element handles crossorigin requests
                // usemap — Name of image map to use
                // ismap — Whether the image is a server-side image map
                // width — Horizontal dimension
                // height — Vertical dimension
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // decoding — Decoding hint to use when processing this image for presentation
                // loading — Used when determining loading deferral
                // fetchpriority — Sets the priority for fetches initiated by the element
            })),
            "object": tstate(t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(t.component_cyclic("Embedded content"))
            })),
            "video": tstate(t.group({
                /*FIXME*/
                // src — Address of the resource
                // crossorigin — How the element handles crossorigin requests
                // poster — Poster frame to show prior to video playback
                // preload — Hints how much buffering the media resource will likely need
                // autoplay — Hint that the media resource can be started automatically when the page is loaded
                // playsinline — Encourage the user agent to display video content within the element's playback area
                // loop — Whether to loop the media resource
                // muted — Whether to mute the media resource by default
                // controls — Show user agent controls
                // width — Horizontal dimension
                // height — Vertical dimension
                //Content:
                //If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                //If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "canvas": tstate(t.group({
                /*FIXME*/
                // width — Horizontal dimension
                // height — Vertical dimension
                //content
                //Transparent, but with no interactive content descendants except for a elements, img elements with usemap attributes, button elements, input elements whose type attribute are in the Checkbox or Radio Button states,
                // input elements that are buttons, and select elements with a multiple attribute or a display size greater than 1.
            })),
            "math": tstate(t.group({/*FIXME*/ })),
            "picture": tstate(t.group({
                /*FIXME*/
                //Zero or more source elements, followed by one img element, optionally intermixed with script-supporting elements.
            })),
            "svg": tstate(t.group({/*FIXME*/ })),
        })),

        "Embedded content": type(t.list(t.component("Embedded"))),

        "Template": type(t.component("Flow content")),

        "Script supporting": type(t.state_group({
            "script": tstate(t.group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of script
                // nomodule — Prevents execution in user agents that support module scripts
                // async — Execute script when available, without blocking while fetching
                // defer — Defer script execution
                // crossorigin — How the element handles crossorigin requests
                // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // blocking — Whether the element is potentially render-blocking
                // fetchpriority — Sets the priority for fetches initiated by the element
                //content:
                //If there is no src attribute, depends on the value of the type attribute, but must match script content restrictions.
                //If there is a src attribute, the element must be either empty or contain only script documentation that also matches script content restrictions.
            })),
            "template": tstate(t.component("Template")),
        })),

        "Heading": type(t.state_group({
            "h1": tstate(t.component("Phrasing content")),
            "h2": tstate(t.component("Phrasing content")),
            "h3": tstate(t.component("Phrasing content")),
            "h4": tstate(t.component("Phrasing content")),
            "h5": tstate(t.component("Phrasing content")),
            "h6": tstate(t.component("Phrasing content")),
            "hgroup": tstate(t.group({
                "content before": prop(t.state_group({
                    "p": tstate(t.group({/*FIXME*/ })),
                    "script supporting": tstate(t.component("Script supporting")),
                })),
                "heading": prop(t.state_group({
                    "h1 ": tstate(t.component("Phrasing content")),
                    "h2": tstate(t.component("Phrasing content")),
                    "h3": tstate(t.component("Phrasing content")),
                    "h4": tstate(t.component("Phrasing content")),
                    "h5": tstate(t.component("Phrasing content")),
                    "h6": tstate(t.component("Phrasing content")),
                })),
                "content after": prop(t.state_group({
                    "p": tstate(t.group({/*FIXME*/ })),
                    "script supporting": tstate(t.component("Script supporting")),
                })),
            })),
        })),

        //"Heading content": type(list(component("Heading"))),
        //"Script supporting content": type(list(component("Script supporting"))),

        "Sectioning content": type(t.state_group({
            "article": tstate(t.component("Flow content")),
            "aside": tstate(t.component("Flow content")),
            "nav": tstate(t.component("Flow content")),
            "section": tstate(t.component("Flow content")),
        })),

        "Flow": type(t.state_group({
            //generic attributes
            "id": tstate(t.group({
                "id": prop(t.text_global("TBD")),
                "child": prop(t.component_cyclic("Flow")),
            })),
            "class": tstate(t.group({
                "class": prop(t.text_global("TBD")),
                "child": prop(t.component_cyclic("Flow")),
            })),
            /**
             * a'phrase' element does not exist in HTML, but this deviation from the standard is needed to handle whitespace properly 
             */
            "script supporting": tstate(t.component("Script supporting")),
            "embedded": tstate(t.component("Embedded")),
            "details": tstate(t.group({
                "summary": prop(t.list(t.state_group({
                    "phrasing": tstate(t.component("Phrasing content")),
                    "heading": tstate(t.component("Heading")),
                }))),
                "content": prop(t.component("Flow content")),
            })),
            "address": tstate(t.group({
                /*FIXME*/
                //Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.
            })),
            "blockquote": tstate(t.group({
                "cite": prop(t.text_global("TBD")),
                "content": prop(t.component("Flow content")),
            })),
            "del": tstate(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Flow content")),
            })),
            "dialog": tstate(t.group({
                "open": prop(t.optional(t.text_global("TBD"))),
                "content": prop(t.component("Flow content")),
            })),
            "div": tstate(t.component("Flow content")),
            "dl": tstate(t.state_group({
                "divs": tstate(t.group({/*FIXME*/ })),
                "dts": tstate(t.group({/*FIXME*/ })),
            })), //description list
            "fieldset": tstate(t.group({
                /*FIXME*/
                "legend": prop(t.optional(t.group({/*FIXME*/ }))),
                // disabled — Whether the descendant form controls, except any inside legend, are disabled
                // form — Associates the element with a form element
                // name — Name of the element to use in the form.elements API.
                "content": prop(t.component("Flow content")),
            })),
            "figure": tstate(t.group({
                "caption": prop(t.optional(t.group({
                    "content": prop(t.component("Flow content")),
                    "position": prop(t.state_group({
                        "top": tstate(t.group({})),
                        "botom": tstate(t.group({})),
                    })),
                }))),
                "content": prop(t.component("Flow content")),
            })),
            "footer": tstate(t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "form": tstate(t.group({
                /*FIXME*/
                // accept-charset — Character encodings to use for form submission
                // action — URL to use for form submission
                // autocomplete — Default setting for autofill feature for controls in the form
                // enctype — Entry list encoding type to use for form submission
                // method — Variant to use for form submission
                // name — Name of form to use in the document.forms API
                // novalidate — Bypass form control validation for form submission
                // target — Navigable for form submission
                // rel
                //"content": Flow content, but with no form element descendants.
            })),
            "header": tstate(t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "hr": tstate(t.group({})),
            "ins": tstate(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Flow content")),
            })),
            /**
             * FIXME
             * A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form
             * without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.
             */
            "main": tstate(t.component("Flow content")),
            "map": tstate(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Flow content")),
            })),
            "menu": tstate(t.list(t.state_group({
                "li": tstate(t.component("Flow content")),
                "script supporting": tstate(t.component("Script supporting")),
            }))),
            "object": tstate(t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(t.component("Flow content")),
            })),
            "ol": tstate(t.group({
                "reversed": prop(t.optional(t.text_global("TBD"))),
                "start": prop(t.optional(t.text_global("TBD"))),
                "type": prop(t.optional(t.state_group({
                    "1": tstate(t.group({})),
                    "a": tstate(t.group({})),
                    "A": tstate(t.group({})),
                    "i": tstate(t.group({})),
                    "I": tstate(t.group({})),
                }))),
                "content": prop(t.list(t.state_group({
                    "li": tstate(t.group({
                        "value": prop(t.text_global("TBD")),
                        "content": prop(t.component("Flow content")),
                    })),
                    "script supporting": tstate(t.component("Script supporting")),
                })))
            })),
            "p": tstate(t.component("Phrasing content")),
            "pre": tstate(t.component("Phrasing content")),
            "search": tstate(t.component("Flow content")),
            "slot": tstate(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Flow content")),
            })),
            "table": tstate(t.group({
                /*FIXME*/
                "caption": prop(t.optional(t.component("Flow content"))),
                "colgroups": prop(t.list(t.group({/*FIXME*/ }))),
                //"thead": prop(optional(component("Flow content"))),

            })),
            "ul": tstate(t.list(t.state_group({
                "li": tstate(t.component("Flow content")),
                "script supporting": tstate(t.component("Script supporting")),
            }))),
            "heading": tstate(t.component("Heading")),
            "sectioning": tstate(t.component("Sectioning content")),
        })),

        "Phrasing": type(t.state_group({
            //generic attributes
            "id": tstate(t.group({
                "id": prop(t.text_global("TBD")),
                "child": prop(t.component_cyclic("Phrasing"))
            })),
            "class": tstate(t.group({
                "class": prop(t.text_global("TBD")),
                "child": prop(t.component_cyclic("Phrasing"))
            })),

            //elements
            "link": tstate(t.group({
                /*FIXME*/
                // href — Address of the hyperlink
                // crossorigin — How the element handles crossorigin requests
                // rel — Relationship between the document containing the hyperlink and the destination resource
                // media — Applicable media
                // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
                // hreflang — Language of the linked resource
                // type — Hint for the type of the referenced resource
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // sizes — Sizes of the icons (for rel="icon")
                // imagesrcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for rel="preload")
                // imagesizes — Image sizes for different page layouts (for rel="preload")
                // as — Potential destination for a preload request (for rel="preload" and rel="modulepreload")
                // blocking — Whether the element is potentially render-blocking
                // color — Color to use when customizing a site's icon (for rel="mask-icon")
                // disabled — Whether the link is disabled
                // fetchpriority — Sets the priority for fetches initiated by the element
                // Also, the title attribute has special semantics on this element: Title of the link; CSS style sheet set name.
            })),
            "meta": tstate(t.group({
                /*FIXME*/

                // name — Metadata name
                // http-equiv — Pragma directive
                // content — Value of the element
                // charset — Character encoding declaration
                // media — Applicable media

                //where to be used:
                // If the charset attribute is present, or if the element's http-equiv attribute is in the Encoding declaration state: in a head element.
                // If the http-equiv attribute is present but not in the Encoding declaration state: in a head element.
                // If the http-equiv attribute is present but not in the Encoding declaration state: in a noscript element that is a child of a head element.
                // If the name attribute is present: where metadata content is expected.
                // If the itemprop attribute is present: where metadata content is expected.
                // If the itemprop attribute is present: where phrasing content is expected.                
            })),
            "noscript": tstate(t.group({
                /*FIXME*/
                //content: 
                // When scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements.
                // When scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants.
                // Otherwise: text that conforms to the requirements given in the prose.

            })),
            "object": tstate(t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(t.component("Phrasing content"))
            })),
            "script supporting": tstate(t.component("Script supporting")),
            "a": tstate(t.group({/*FIXMEX*/ })),
            "button": tstate(t.group({
                /*FIXME*/
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // formaction — URL to use for form submission
                // formenctype — Entry list encoding type to use for form submission
                // formmethod — Variant to use for form submission
                // formnovalidate — Bypass form control validation for form submission
                // formtarget — Navigable for form submission
                // name — Name of the element to use for form submission and in the form.elements API
                // popovertarget
                // popovertargetaction
                // type — Type of button
                // value — Value to be used for form submission  

                //content:
                //Phrasing content, but there must be no interactive content descendant and no descendant with the tabindex attribute specified.

            })),
            "input": tstate(t.group({
                /*FIXME*/
                // accept — Hint for expected file type in file upload controls
                // alt — Replacement text for use when images are not available
                // autocomplete — Hint for form autofill feature
                // checked — Whether the control is checked
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // formaction — URL to use for form submission
                // formenctype — Entry list encoding type to use for form submission
                // formmethod — Variant to use for form submission
                // formnovalidate — Bypass form control validation for form submission
                // formtarget — Navigable for form submission
                // height — Vertical dimension
                // list — List of autocomplete options
                // max — Maximum value
                // maxlength — Maximum length of value
                // min — Minimum value
                // minlength — Minimum length of value
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // pattern — Pattern to be matched by the form control's value
                // placeholder — User-visible label to be placed within the form control
                // popovertarget
                // popovertargetaction
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // size — Size of the control
                // src — Address of the resource
                // step — Granularity to be matched by the form control's value
                // type — Type of form control
                // value — Value of the form control
                // width — Horizontal dimension
                // Also, the title attribute has special semantics on this element: Description of pattern (when used with pattern attribute).
            })),
            "label": tstate(t.group({
                /*FIXME*/
                //for — Associate the label with form control
                //content: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
            })),
            "select": tstate(t.group({
                // autocomplete — Hint for form autofill feature
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // required — Whether the control is required for form submission
                // size — Size of the control
                "content": prop(t.list(t.state_group({
                    "option": tstate(t.group({/*FIXME*/ })),
                    "optgroup": tstate(t.group({
                        //label
                        //disabled
                        "options": prop(t.list(t.group({
                            /*FIXME*/
                        })))
                    })),
                    "script supporting": tstate(t.component("Script supporting")),
                }))),
            })),
            "textarea": tstate(t.group({
                /*FIXME*/
                // autocomplete — Hint for form autofill feature
                // cols — Maximum number of characters per line
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // maxlength — Maximum length of value
                // minlength — Minimum length of value
                // name — Name of the element to use for form submission and in the form.elements API
                // placeholder — User-visible label to be placed within the form control
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // rows — Number of lines to show
                // wrap — How the value of the form control is to be wrapped for form submission 
                "content": prop(t.text_global("TBD")),
            })),
            "abbr": tstate(t.group({
                "title": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "area": tstate(t.group({ //FIXME: needs a 'map' ancestor
                /*FIXME*/
                // alt — Replacement text for use when images are not available
                // coords — Coordinates for the shape to be created in an image map
                // shape — The kind of shape to be created in an image map
                // href — Address of the hyperlink
                // target — Navigable for hyperlink navigation
                // download — Whether to download the resource instead of navigating to it, and its filename if so
                // ping — URLs to ping
                // rel — Relationship between the location in the document containing the hyperlink and the destination resource
                // referrerpolicy — Referrer policy for fetches initiated by the element
            })),
            "b": tstate(t.component("Phrasing content")),
            "bdi": tstate(t.group({
                "dir": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "bdo": tstate(t.group({
                "dir": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "br": tstate(t.group({})), //line break
            "cite": tstate(t.component("Phrasing content")),
            "code": tstate(t.component("Phrasing content")),
            "data": tstate(t.group({
                "value": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "datalist": tstate(t.state_group({
                "phrasing": tstate(t.component("Phrasing content")),
                "options": tstate(t.list(t.state_group({
                    "option": tstate(t.group({/*FIXME*/ })),
                    "script supporting": tstate(t.component("Script supporting")),
                }))),
            })),
            "del": tstate(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Phrasing content"))
            })),
            "dfn": tstate(t.group({ //FIXME: there may not be a dfn ancestor
                "title": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "em": tstate(t.component("Phrasing content")),
            "i": tstate(t.component("Phrasing content")),
            "ins": tstate(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Phrasing content")),
            })),
            "kbd": tstate(t.component("Phrasing content")),
            "map": tstate(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content"))
            })),
            "mark": tstate(t.component("Phrasing content")),
            "meter": tstate(t.group({
                /*FIXME*/

                // value — Current value of the element
                // min — Lower bound of range
                // max — Upper bound of range
                // low — High limit of low range
                // high — Low limit of high range
                // optimum — Optimum value in gauge

                // content:
                // Phrasing content, but there must be no meter element descendants.
            })),
            "output": tstate(t.group({
                "for": prop(t.optional(t.text_global("TBD"))),
                "form": prop(t.text_global("TBD")),//optional?
                "name": prop(t.text_global("TBD")),//optional?
                "content": prop(t.component("Phrasing content")),
            })),
            "progress": tstate(t.group({ //FIXME: there may not be any progress element ancestors
                "value": prop(t.text_global("TBD")),
                "max": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "q": tstate(t.group({
                "cite": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "ruby": tstate(t.group({
                /*FIXME*/
                // One or the other of the following:
                // Phrasing content, but with no ruby elements and with no ruby element descendants
                // A single ruby element that itself has no ruby element descendants
                // One or the other of the following:
                // One or more rt elements
                // An rp element followed by one or more rt elements, each of which is itself followed by an rp element            
            })),
            "s": tstate(t.component("Phrasing content")),
            "samp": tstate(t.component("Phrasing content")),
            "slot": tstate(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "small": tstate(t.component("Phrasing content")),
            "span": tstate(t.component("Phrasing content")),
            "strong": tstate(t.component("Phrasing content")),
            "sub": tstate(t.component("Phrasing content")),
            "sup": tstate(t.component("Phrasing content")),
            "time": tstate(t.state_group({
                "datetime": tstate(t.group({
                    "value": prop(t.text_global("TBD")),
                    "content": prop(t.component("Phrasing content")),
                })),
                "text": tstate(t.text_global("TBD")),
            })),
            "u": tstate(t.component("Phrasing content")),
            "var": tstate(t.component("Phrasing content")),
            "wbr": tstate(t.group({})), //line break opportunity
            "embedded": tstate(t.component("Embedded")),
        })),
    }
)


