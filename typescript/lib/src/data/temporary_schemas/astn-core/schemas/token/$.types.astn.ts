
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Tokenizer Result": sh.module_(sh.t.group({
            "leading trivia": sh.prop(sh.t.component("Trivia")),
            "tokens": sh.prop(sh.t.list(sh.t.component("Annotated Token"))),
            "end": sh.prop(sh.t.component_external("location", "Location")),
        })),

        "Annotated Token": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.component_external("location", "Location")),
            "type": sh.prop(sh.t.state({
                "!": sh.toption(sh.t.nothing()), //header

                "@": sh.toption(sh.t.nothing()), //include
                ":": sh.toption(sh.t.nothing()), //colon
                "#": sh.toption(sh.t.nothing()), //missing data

                //concrete values
                "{": sh.toption(sh.t.nothing()), //dictionary open
                "}": sh.toption(sh.t.nothing()), //dictionary close

                "[": sh.toption(sh.t.nothing()), //list open
                "]": sh.toption(sh.t.nothing()), //list close

                "(": sh.toption(sh.t.nothing()), //verbose group open
                ")": sh.toption(sh.t.nothing()), //verbose group close
                "<": sh.toption(sh.t.nothing()), //concise group open
                ">": sh.toption(sh.t.nothing()), //concise group close

                "~": sh.toption(sh.t.nothing()), //nothing
                "_": sh.toption(sh.t.nothing()), //not set
                "*": sh.toption(sh.t.nothing()), //set

                "|": sh.toption(sh.t.nothing()), //state
                "text": sh.toption(sh.t.component("Text")),
            })),
            "end": sh.prop(sh.t.component_external("location", "Location")),
            "trailing trivia": sh.prop(sh.t.component("Trivia")),
        })),

        "Whitespace": sh.module_(sh.t.optional(sh.t.group({
            "range": sh.prop(sh.t.component_external("location", "Range")),
            "value": sh.prop(sh.t.text_global("text")),
        }))),

        "Trivia": sh.module_(sh.t.group({
            "leading whitespace": sh.prop(sh.t.component("Whitespace")),
            "comments": sh.prop(sh.t.list(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "line": sh.toption(sh.t.nothing()),
                    "block": sh.toption(sh.t.nothing()),
                })),
                "content": sh.prop(sh.t.text_global("text")),
                "range": sh.prop(sh.t.component_external("location", "Range")),
                "trailing whitespace": sh.prop(sh.t.component("Whitespace")),
            }))),
        })),

        "Text": sh.module_(sh.t.group({
            "value": sh.prop(sh.t.text_global("text")),
            "type": sh.prop(sh.t.component("Text Type")),
        })),

        "Text Type": sh.module_(sh.t.state({
            "quoted": sh.toption(sh.t.nothing()),
            "apostrophed": sh.toption(sh.t.nothing()),
            "undelimited": sh.toption(sh.t.nothing()),
            "backticked": sh.toption(sh.t.nothing()),
        })),
    }
)