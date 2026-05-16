import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Phrasing content": module_(t.list(t.state({
            "text": toption(t.text_global("TBD")),
            "element": toption(t.component("Phrasing")),
        }))),

        "Flow content": module_(t.list(t.state({
            "phrase": toption(t.component("Phrasing content")),
            "flow": toption(t.component("Flow")),
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

        "Document": module_(t.group({
            "lang": prop(t.optional(t.text_global("TBD"))),
            "head": prop(t.group({
                "title": prop(t.text_global("TBD"))
            })),
            "body": prop(t.component("Flow content"))
        })),

        "Edit": module_(t.group({
            "cite": prop(t.optional(t.text_global("TBD"))),
            "datetime": prop(t.optional(t.text_global("TBD"))),
        })),

        "Embedded": module_(t.state({
            "audio": toption(t.group({
                /*FIXME*/
                // If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                // If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "embed": toption(t.group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of embedded resource
                // width — Horizontal dimension
                // height — Vertical dimension
                // Any other attribute that has no namespace (see prose).
            })),
            "iframe": toption(t.group({
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
            "img": toption(t.group({
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
            "object": toption(t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(t.component("Embedded content"))
            })),
            "video": toption(t.group({
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
            "canvas": toption(t.group({
                /*FIXME*/
                // width — Horizontal dimension
                // height — Vertical dimension
                //content
                //Transparent, but with no interactive content descendants except for a elements, img elements with usemap attributes, button elements, input elements whose type attribute are in the Checkbox or Radio Button states,
                // input elements that are buttons, and select elements with a multiple attribute or a display size greater than 1.
            })),
            "math": toption(t.group({/*FIXME*/ })),
            "picture": toption(t.group({
                /*FIXME*/
                //Zero or more source elements, followed by one img element, optionally intermixed with script-supporting elements.
            })),
            "svg": toption(t.group({/*FIXME*/ })),
        })),

        "Embedded content": module_(t.list(t.component("Embedded"))),

        "Template": module_(t.component("Flow content")),

        "Script supporting": module_(t.state({
            "script": toption(t.group({
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
            "template": toption(t.component("Template")),
        })),

        "Heading": module_(t.state({
            "h1": toption(t.component("Phrasing content")),
            "h2": toption(t.component("Phrasing content")),
            "h3": toption(t.component("Phrasing content")),
            "h4": toption(t.component("Phrasing content")),
            "h5": toption(t.component("Phrasing content")),
            "h6": toption(t.component("Phrasing content")),
            "hgroup": toption(t.group({
                "content before": prop(t.state({
                    "p": toption(t.group({/*FIXME*/ })),
                    "script supporting": toption(t.component("Script supporting")),
                })),
                "heading": prop(t.state({
                    "h1 ": toption(t.component("Phrasing content")),
                    "h2": toption(t.component("Phrasing content")),
                    "h3": toption(t.component("Phrasing content")),
                    "h4": toption(t.component("Phrasing content")),
                    "h5": toption(t.component("Phrasing content")),
                    "h6": toption(t.component("Phrasing content")),
                })),
                "content after": prop(t.state({
                    "p": toption(t.group({/*FIXME*/ })),
                    "script supporting": toption(t.component("Script supporting")),
                })),
            })),
        })),

        //"Heading content": type(list(component("Heading"))),
        //"Script supporting content": type(list(component("Script supporting"))),

        "Sectioning content": module_(t.state({
            "article": toption(t.component("Flow content")),
            "aside": toption(t.component("Flow content")),
            "nav": toption(t.component("Flow content")),
            "section": toption(t.component("Flow content")),
        })),

        "Flow": module_(t.state({
            //generic attributes
            "id": toption(t.group({
                "id": prop(t.text_global("TBD")),
                "child": prop(t.component("Flow")),
            })),
            "class": toption(t.group({
                "class": prop(t.text_global("TBD")),
                "child": prop(t.component("Flow")),
            })),
            /**
             * a'phrase' element does not exist in HTML, but this deviation from the standard is needed to handle whitespace properly 
             */
            "script supporting": toption(t.component("Script supporting")),
            "embedded": toption(t.component("Embedded")),
            "details": toption(t.group({
                "summary": prop(t.list(t.state({
                    "phrasing": toption(t.component("Phrasing content")),
                    "heading": toption(t.component("Heading")),
                }))),
                "content": prop(t.component("Flow content")),
            })),
            "address": toption(t.group({
                /*FIXME*/
                //Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.
            })),
            "blockquote": toption(t.group({
                "cite": prop(t.text_global("TBD")),
                "content": prop(t.component("Flow content")),
            })),
            "del": toption(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Flow content")),
            })),
            "dialog": toption(t.group({
                "open": prop(t.optional(t.text_global("TBD"))),
                "content": prop(t.component("Flow content")),
            })),
            "div": toption(t.component("Flow content")),
            "dl": toption(t.state({
                "divs": toption(t.group({/*FIXME*/ })),
                "dts": toption(t.group({/*FIXME*/ })),
            })), //description list
            "fieldset": toption(t.group({
                /*FIXME*/
                "legend": prop(t.optional(t.group({/*FIXME*/ }))),
                // disabled — Whether the descendant form controls, except any inside legend, are disabled
                // form — Associates the element with a form element
                // name — Name of the element to use in the form.elements API.
                "content": prop(t.component("Flow content")),
            })),
            "figure": toption(t.group({
                "caption": prop(t.optional(t.group({
                    "content": prop(t.component("Flow content")),
                    "position": prop(t.state({
                        "top": toption(t.group({})),
                        "botom": toption(t.group({})),
                    })),
                }))),
                "content": prop(t.component("Flow content")),
            })),
            "footer": toption(t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "form": toption(t.group({
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
            "header": toption(t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "hr": toption(t.group({})),
            "ins": toption(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Flow content")),
            })),
            /**
             * FIXME
             * A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form
             * without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.
             */
            "main": toption(t.component("Flow content")),
            "map": toption(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Flow content")),
            })),
            "menu": toption(t.list(t.state({
                "li": toption(t.component("Flow content")),
                "script supporting": toption(t.component("Script supporting")),
            }))),
            "object": toption(t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(t.component("Flow content")),
            })),
            "ol": toption(t.group({
                "reversed": prop(t.optional(t.text_global("TBD"))),
                "start": prop(t.optional(t.text_global("TBD"))),
                "type": prop(t.optional(t.state({
                    "1": toption(t.group({})),
                    "a": toption(t.group({})),
                    "A": toption(t.group({})),
                    "i": toption(t.group({})),
                    "I": toption(t.group({})),
                }))),
                "content": prop(t.list(t.state({
                    "li": toption(t.group({
                        "value": prop(t.text_global("TBD")),
                        "content": prop(t.component("Flow content")),
                    })),
                    "script supporting": toption(t.component("Script supporting")),
                })))
            })),
            "p": toption(t.component("Phrasing content")),
            "pre": toption(t.component("Phrasing content")),
            "search": toption(t.component("Flow content")),
            "slot": toption(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Flow content")),
            })),
            "table": toption(t.group({
                /*FIXME*/
                "caption": prop(t.optional(t.component("Flow content"))),
                "colgroups": prop(t.list(t.group({/*FIXME*/ }))),
                //"thead": prop(optional(component("Flow content"))),

            })),
            "ul": toption(t.list(t.state({
                "li": toption(t.component("Flow content")),
                "script supporting": toption(t.component("Script supporting")),
            }))),
            "heading": toption(t.component("Heading")),
            "sectioning": toption(t.component("Sectioning content")),
        })),

        "Phrasing": module_(t.state({
            //generic attributes
            "id": toption(t.group({
                "id": prop(t.text_global("TBD")),
                "child": prop(t.component("Phrasing"))
            })),
            "class": toption(t.group({
                "class": prop(t.text_global("TBD")),
                "child": prop(t.component("Phrasing"))
            })),

            //elements
            "link": toption(t.group({
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
            "meta": toption(t.group({
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
            "noscript": toption(t.group({
                /*FIXME*/
                //content: 
                // When scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements.
                // When scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants.
                // Otherwise: text that conforms to the requirements given in the prose.

            })),
            "object": toption(t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(t.component("Phrasing content"))
            })),
            "script supporting": toption(t.component("Script supporting")),
            "a": toption(t.group({/*FIXMEX*/ })),
            "button": toption(t.group({
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
            "input": toption(t.group({
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
            "label": toption(t.group({
                /*FIXME*/
                //for — Associate the label with form control
                //content: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
            })),
            "select": toption(t.group({
                // autocomplete — Hint for form autofill feature
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // required — Whether the control is required for form submission
                // size — Size of the control
                "content": prop(t.list(t.state({
                    "option": toption(t.group({/*FIXME*/ })),
                    "optgroup": toption(t.group({
                        //label
                        //disabled
                        "options": prop(t.list(t.group({
                            /*FIXME*/
                        })))
                    })),
                    "script supporting": toption(t.component("Script supporting")),
                }))),
            })),
            "textarea": toption(t.group({
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
            "abbr": toption(t.group({
                "title": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "area": toption(t.group({ //FIXME: needs a 'map' ancestor
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
            "b": toption(t.component("Phrasing content")),
            "bdi": toption(t.group({
                "dir": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "bdo": toption(t.group({
                "dir": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "br": toption(t.group({})), //line break
            "cite": toption(t.component("Phrasing content")),
            "code": toption(t.component("Phrasing content")),
            "data": toption(t.group({
                "value": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "datalist": toption(t.state({
                "phrasing": toption(t.component("Phrasing content")),
                "options": toption(t.list(t.state({
                    "option": toption(t.group({/*FIXME*/ })),
                    "script supporting": toption(t.component("Script supporting")),
                }))),
            })),
            "del": toption(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Phrasing content"))
            })),
            "dfn": toption(t.group({ //FIXME: there may not be a dfn ancestor
                "title": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "em": toption(t.component("Phrasing content")),
            "i": toption(t.component("Phrasing content")),
            "ins": toption(t.group({
                "edit": prop(t.component("Edit")),
                "content": prop(t.component("Phrasing content")),
            })),
            "kbd": toption(t.component("Phrasing content")),
            "map": toption(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content"))
            })),
            "mark": toption(t.component("Phrasing content")),
            "meter": toption(t.group({
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
            "output": toption(t.group({
                "for": prop(t.optional(t.text_global("TBD"))),
                "form": prop(t.text_global("TBD")),//optional?
                "name": prop(t.text_global("TBD")),//optional?
                "content": prop(t.component("Phrasing content")),
            })),
            "progress": toption(t.group({ //FIXME: there may not be any progress element ancestors
                "value": prop(t.text_global("TBD")),
                "max": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "q": toption(t.group({
                "cite": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "ruby": toption(t.group({
                /*FIXME*/
                // One or the other of the following:
                // Phrasing content, but with no ruby elements and with no ruby element descendants
                // A single ruby element that itself has no ruby element descendants
                // One or the other of the following:
                // One or more rt elements
                // An rp element followed by one or more rt elements, each of which is itself followed by an rp element            
            })),
            "s": toption(t.component("Phrasing content")),
            "samp": toption(t.component("Phrasing content")),
            "slot": toption(t.group({
                "name": prop(t.text_global("TBD")),
                "content": prop(t.component("Phrasing content")),
            })),
            "small": toption(t.component("Phrasing content")),
            "span": toption(t.component("Phrasing content")),
            "strong": toption(t.component("Phrasing content")),
            "sub": toption(t.component("Phrasing content")),
            "sup": toption(t.component("Phrasing content")),
            "time": toption(t.state({
                "datetime": toption(t.group({
                    "value": prop(t.text_global("TBD")),
                    "content": prop(t.component("Phrasing content")),
                })),
                "text": toption(t.text_global("TBD")),
            })),
            "u": toption(t.component("Phrasing content")),
            "var": toption(t.component("Phrasing content")),
            "wbr": toption(t.group({})), //line break opportunity
            "embedded": toption(t.component("Embedded")),
        })),
    }
)


