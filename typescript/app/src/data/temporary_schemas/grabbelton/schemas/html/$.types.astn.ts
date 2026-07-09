
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Phrasing content": sh.module_(sh.t.list(sh.t.state({
            "text": sh.toption(sh.t.text_global("TBD")),
            "element": sh.toption(sh.t.component("Phrasing")),
        }))),

        "Flow content": sh.module_(sh.t.list(sh.t.state({
            "phrase": sh.toption(sh.t.component("Phrasing content")),
            "flow": sh.toption(sh.t.component("Flow")),
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

        "Document": sh.module_(sh.t.group({
            "lang": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
            "head": sh.prop(sh.t.group({
                "title": sh.prop(sh.t.text_global("TBD"))
            })),
            "body": sh.prop(sh.t.component("Flow content"))
        })),

        "Edit": sh.module_(sh.t.group({
            "cite": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
            "datetime": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
        })),

        "Embedded": sh.module_(sh.t.state({
            "audio": sh.toption(sh.t.group({
                /*FIXME*/
                // If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                // If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "embed": sh.toption(sh.t.group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of embedded resource
                // width — Horizontal dimension
                // height — Vertical dimension
                // Any other attribute that has no namespace (see prose).
            })),
            "iframe": sh.toption(sh.t.group({
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
            "img": sh.toption(sh.t.group({
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
            "object": sh.toption(sh.t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": sh.prop(sh.t.component("Embedded content"))
            })),
            "video": sh.toption(sh.t.group({
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
            "canvas": sh.toption(sh.t.group({
                /*FIXME*/
                // width — Horizontal dimension
                // height — Vertical dimension
                //content
                //Transparent, but with no interactive content descendants except for a elements, img elements with usemap attributes, button elements, input elements whose type attribute are in the Checkbox or Radio Button states,
                // input elements that are buttons, and select elements with a multiple attribute or a display size greater than 1.
            })),
            "math": sh.toption(sh.t.group({/*FIXME*/ })),
            "picture": sh.toption(sh.t.group({
                /*FIXME*/
                //Zero or more source elements, followed by one img element, optionally intermixed with script-supporting elements.
            })),
            "svg": sh.toption(sh.t.group({/*FIXME*/ })),
        })),

        "Embedded content": sh.module_(sh.t.list(sh.t.component("Embedded"))),

        "Template": sh.module_(sh.t.component("Flow content")),

        "Script supporting": sh.module_(sh.t.state({
            "script": sh.toption(sh.t.group({
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
            "template": sh.toption(sh.t.component("Template")),
        })),

        "Heading": sh.module_(sh.t.state({
            "h1": sh.toption(sh.t.component("Phrasing content")),
            "h2": sh.toption(sh.t.component("Phrasing content")),
            "h3": sh.toption(sh.t.component("Phrasing content")),
            "h4": sh.toption(sh.t.component("Phrasing content")),
            "h5": sh.toption(sh.t.component("Phrasing content")),
            "h6": sh.toption(sh.t.component("Phrasing content")),
            "hgroup": sh.toption(sh.t.group({
                "content before": sh.prop(sh.t.state({
                    "p": sh.toption(sh.t.group({/*FIXME*/ })),
                    "script supporting": sh.toption(sh.t.component("Script supporting")),
                })),
                "heading": sh.prop(sh.t.state({
                    "h1 ": sh.toption(sh.t.component("Phrasing content")),
                    "h2": sh.toption(sh.t.component("Phrasing content")),
                    "h3": sh.toption(sh.t.component("Phrasing content")),
                    "h4": sh.toption(sh.t.component("Phrasing content")),
                    "h5": sh.toption(sh.t.component("Phrasing content")),
                    "h6": sh.toption(sh.t.component("Phrasing content")),
                })),
                "content after": sh.prop(sh.t.state({
                    "p": sh.toption(sh.t.group({/*FIXME*/ })),
                    "script supporting": sh.toption(sh.t.component("Script supporting")),
                })),
            })),
        })),

        //"Heading content": type(list(component("Heading"))),
        //"Script supporting content": type(list(component("Script supporting"))),

        "Sectioning content": sh.module_(sh.t.state({
            "article": sh.toption(sh.t.component("Flow content")),
            "aside": sh.toption(sh.t.component("Flow content")),
            "nav": sh.toption(sh.t.component("Flow content")),
            "section": sh.toption(sh.t.component("Flow content")),
        })),

        "Flow": sh.module_(sh.t.state({
            //generic attributes
            "id": sh.toption(sh.t.group({
                "id": sh.prop(sh.t.text_global("TBD")),
                "child": sh.prop(sh.t.component("Flow")),
            })),
            "class": sh.toption(sh.t.group({
                "class": sh.prop(sh.t.text_global("TBD")),
                "child": sh.prop(sh.t.component("Flow")),
            })),
            /**
             * a'phrase' element does not exist in HTML, but this deviation from the standard is needed to handle whitespace properly 
             */
            "script supporting": sh.toption(sh.t.component("Script supporting")),
            "embedded": sh.toption(sh.t.component("Embedded")),
            "details": sh.toption(sh.t.group({
                "summary": sh.prop(sh.t.list(sh.t.state({
                    "phrasing": sh.toption(sh.t.component("Phrasing content")),
                    "heading": sh.toption(sh.t.component("Heading")),
                }))),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "address": sh.toption(sh.t.group({
                /*FIXME*/
                //Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.
            })),
            "blockquote": sh.toption(sh.t.group({
                "cite": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "del": sh.toption(sh.t.group({
                "edit": sh.prop(sh.t.component("Edit")),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "dialog": sh.toption(sh.t.group({
                "open": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "div": sh.toption(sh.t.component("Flow content")),
            "dl": sh.toption(sh.t.state({
                "divs": sh.toption(sh.t.group({/*FIXME*/ })),
                "dts": sh.toption(sh.t.group({/*FIXME*/ })),
            })), //description list
            "fieldset": sh.toption(sh.t.group({
                /*FIXME*/
                "legend": sh.prop(sh.t.optional(sh.t.group({/*FIXME*/ }))),
                // disabled — Whether the descendant form controls, except any inside legend, are disabled
                // form — Associates the element with a form element
                // name — Name of the element to use in the form.elements API.
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "figure": sh.toption(sh.t.group({
                "caption": sh.prop(sh.t.optional(sh.t.group({
                    "content": sh.prop(sh.t.component("Flow content")),
                    "position": sh.prop(sh.t.state({
                        "top": sh.toption(sh.t.group({})),
                        "botom": sh.toption(sh.t.group({})),
                    })),
                }))),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "footer": sh.toption(sh.t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "form": sh.toption(sh.t.group({
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
            "header": sh.toption(sh.t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "hr": sh.toption(sh.t.group({})),
            "ins": sh.toption(sh.t.group({
                "edit": sh.prop(sh.t.component("Edit")),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            /**
             * FIXME
             * A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form
             * without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.
             */
            "main": sh.toption(sh.t.component("Flow content")),
            "map": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "menu": sh.toption(sh.t.list(sh.t.state({
                "li": sh.toption(sh.t.component("Flow content")),
                "script supporting": sh.toption(sh.t.component("Script supporting")),
            }))),
            "object": sh.toption(sh.t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "ol": sh.toption(sh.t.group({
                "reversed": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
                "start": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
                "type": sh.prop(sh.t.optional(sh.t.state({
                    "1": sh.toption(sh.t.group({})),
                    "a": sh.toption(sh.t.group({})),
                    "A": sh.toption(sh.t.group({})),
                    "i": sh.toption(sh.t.group({})),
                    "I": sh.toption(sh.t.group({})),
                }))),
                "content": sh.prop(sh.t.list(sh.t.state({
                    "li": sh.toption(sh.t.group({
                        "value": sh.prop(sh.t.text_global("TBD")),
                        "content": sh.prop(sh.t.component("Flow content")),
                    })),
                    "script supporting": sh.toption(sh.t.component("Script supporting")),
                })))
            })),
            "p": sh.toption(sh.t.component("Phrasing content")),
            "pre": sh.toption(sh.t.component("Phrasing content")),
            "search": sh.toption(sh.t.component("Flow content")),
            "slot": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Flow content")),
            })),
            "table": sh.toption(sh.t.group({
                /*FIXME*/
                "caption": sh.prop(sh.t.optional(sh.t.component("Flow content"))),
                "colgroups": sh.prop(sh.t.list(sh.t.group({/*FIXME*/ }))),
                //"thead": sh.prop(optional(component("Flow content"))),

            })),
            "ul": sh.toption(sh.t.list(sh.t.state({
                "li": sh.toption(sh.t.component("Flow content")),
                "script supporting": sh.toption(sh.t.component("Script supporting")),
            }))),
            "heading": sh.toption(sh.t.component("Heading")),
            "sectioning": sh.toption(sh.t.component("Sectioning content")),
        })),

        "Phrasing": sh.module_(sh.t.state({
            //generic attributes
            "id": sh.toption(sh.t.group({
                "id": sh.prop(sh.t.text_global("TBD")),
                "child": sh.prop(sh.t.component("Phrasing"))
            })),
            "class": sh.toption(sh.t.group({
                "class": sh.prop(sh.t.text_global("TBD")),
                "child": sh.prop(sh.t.component("Phrasing"))
            })),

            //elements
            "link": sh.toption(sh.t.group({
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
            "meta": sh.toption(sh.t.group({
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
            "noscript": sh.toption(sh.t.group({
                /*FIXME*/
                //content: 
                // When scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements.
                // When scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants.
                // Otherwise: text that conforms to the requirements given in the prose.

            })),
            "object": sh.toption(sh.t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": sh.prop(sh.t.component("Phrasing content"))
            })),
            "script supporting": sh.toption(sh.t.component("Script supporting")),
            "a": sh.toption(sh.t.group({/*FIXMEX*/ })),
            "button": sh.toption(sh.t.group({
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
            "input": sh.toption(sh.t.group({
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
            "label": sh.toption(sh.t.group({
                /*FIXME*/
                //for — Associate the label with form control
                //content: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
            })),
            "select": sh.toption(sh.t.group({
                // autocomplete — Hint for form autofill feature
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // required — Whether the control is required for form submission
                // size — Size of the control
                "content": sh.prop(sh.t.list(sh.t.state({
                    "option": sh.toption(sh.t.group({/*FIXME*/ })),
                    "optgroup": sh.toption(sh.t.group({
                        //label
                        //disabled
                        "options": sh.prop(sh.t.list(sh.t.group({
                            /*FIXME*/
                        })))
                    })),
                    "script supporting": sh.toption(sh.t.component("Script supporting")),
                }))),
            })),
            "textarea": sh.toption(sh.t.group({
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
                "content": sh.prop(sh.t.text_global("TBD")),
            })),
            "abbr": sh.toption(sh.t.group({
                "title": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "area": sh.toption(sh.t.group({ //FIXME: needs a 'map' ancestor
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
            "b": sh.toption(sh.t.component("Phrasing content")),
            "bdi": sh.toption(sh.t.group({
                "dir": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "bdo": sh.toption(sh.t.group({
                "dir": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "br": sh.toption(sh.t.group({})), //line break
            "cite": sh.toption(sh.t.component("Phrasing content")),
            "code": sh.toption(sh.t.component("Phrasing content")),
            "data": sh.toption(sh.t.group({
                "value": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "datalist": sh.toption(sh.t.state({
                "phrasing": sh.toption(sh.t.component("Phrasing content")),
                "options": sh.toption(sh.t.list(sh.t.state({
                    "option": sh.toption(sh.t.group({/*FIXME*/ })),
                    "script supporting": sh.toption(sh.t.component("Script supporting")),
                }))),
            })),
            "del": sh.toption(sh.t.group({
                "edit": sh.prop(sh.t.component("Edit")),
                "content": sh.prop(sh.t.component("Phrasing content"))
            })),
            "dfn": sh.toption(sh.t.group({ //FIXME: there may not be a dfn ancestor
                "title": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "em": sh.toption(sh.t.component("Phrasing content")),
            "i": sh.toption(sh.t.component("Phrasing content")),
            "ins": sh.toption(sh.t.group({
                "edit": sh.prop(sh.t.component("Edit")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "kbd": sh.toption(sh.t.component("Phrasing content")),
            "map": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content"))
            })),
            "mark": sh.toption(sh.t.component("Phrasing content")),
            "meter": sh.toption(sh.t.group({
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
            "output": sh.toption(sh.t.group({
                "for": sh.prop(sh.t.optional(sh.t.text_global("TBD"))),
                "form": sh.prop(sh.t.text_global("TBD")),//optional?
                "name": sh.prop(sh.t.text_global("TBD")),//optional?
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "progress": sh.toption(sh.t.group({ //FIXME: there may not be any progress element ancestors
                "value": sh.prop(sh.t.text_global("TBD")),
                "max": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "q": sh.toption(sh.t.group({
                "cite": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "ruby": sh.toption(sh.t.group({
                /*FIXME*/
                // One or the other of the following:
                // Phrasing content, but with no ruby elements and with no ruby element descendants
                // A single ruby element that itself has no ruby element descendants
                // One or the other of the following:
                // One or more rt elements
                // An rp element followed by one or more rt elements, each of which is itself followed by an rp element            
            })),
            "s": sh.toption(sh.t.component("Phrasing content")),
            "samp": sh.toption(sh.t.component("Phrasing content")),
            "slot": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.text_global("TBD")),
                "content": sh.prop(sh.t.component("Phrasing content")),
            })),
            "small": sh.toption(sh.t.component("Phrasing content")),
            "span": sh.toption(sh.t.component("Phrasing content")),
            "strong": sh.toption(sh.t.component("Phrasing content")),
            "sub": sh.toption(sh.t.component("Phrasing content")),
            "sup": sh.toption(sh.t.component("Phrasing content")),
            "time": sh.toption(sh.t.state({
                "datetime": sh.toption(sh.t.group({
                    "value": sh.prop(sh.t.text_global("TBD")),
                    "content": sh.prop(sh.t.component("Phrasing content")),
                })),
                "text": sh.toption(sh.t.text_global("TBD")),
            })),
            "u": sh.toption(sh.t.component("Phrasing content")),
            "var": sh.toption(sh.t.component("Phrasing content")),
            "wbr": sh.toption(sh.t.group({})), //line break opportunity
            "embedded": sh.toption(sh.t.component("Embedded")),
        })),
    }
)


