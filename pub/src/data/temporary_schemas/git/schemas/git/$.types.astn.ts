import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Git Command": module_(t.state({
            "view": toption(t.state({
                "workspace": toption(t.state({
                    "status": toption(t.group({ // git status
                        'porcelain': prop(t.optional(t.text_local(text('single line')))),
                        'short': prop(t.boolean()),
                        'branch': prop(t.boolean()),
                        'show stash': prop(t.boolean()),
                    })),
                    "diff": toption(t.group({ // git diff
                        'cached': prop(t.boolean()), // --cached for staged changes
                        'name only': prop(t.boolean()),
                        'stat': prop(t.boolean()),
                        'files': prop(t.optional(t.list(t.text_local(text('single line'))))),
                    })),
                    "show": toption(t.group({ // git show
                        'commit': prop(t.optional(t.text_local(text('single line')))),
                        'name only': prop(t.boolean()),
                        'stat': prop(t.boolean()),
                    })),
                })),
                "index": toption(t.state({
                    "diff cached": toption(t.group({ // git diff --cached
                        'name only': prop(t.boolean()),
                        'stat': prop(t.boolean()),
                        'files': prop(t.optional(t.list(t.text_local(text('single line'))))),
                    })),
                    "status": toption(t.group({ // git status (shows staged files)
                        'porcelain': prop(t.optional(t.text_local(text('single line')))),
                        'short': prop(t.boolean()),
                    })),
                })),
                "stash": toption(t.state({
                    "list": toption(t.group({ // git stash.b.st
                        'oneline': prop(t.boolean()),
                    })),
                    "show": toption(t.group({ // git stash show
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                        'patch': prop(t.boolean()),
                    })),
                })),
                "local repo": toption(t.state({
                    "log": toption(t.group({ // git log
                        'oneline': prop(t.boolean()),
                        'graph': prop(t.boolean()),
                        'all': prop(t.boolean()),
                        'since': prop(t.optional(t.text_local(text('single line')))),
                        'until': prop(t.optional(t.text_local(text('single line')))),
                        'author': prop(t.optional(t.text_local(text('single line')))),
                        'grep': prop(t.optional(t.text_local(text('single line')))),
                        'max count': prop(t.optional(t.simple("Natural"))),
                    })),
                    "branch": toption(t.group({ // git branch (list)
                        'all': prop(t.boolean()),
                        'remote': prop(t.boolean()),
                        'verbose': prop(t.boolean()),
                    })),
                    "tag": toption(t.group({ // git tag (list)
                        'list': prop(t.optional(t.text_local(text('single line')))), // pattern
                    })),
                    "reflog": toption(t.group({ // git reflog
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'oneline': prop(t.boolean()),
                    })),
                })),
                "remote repo": toption(t.state({
                    "remote": toption(t.group({ // git remote
                        'verbose': prop(t.boolean()),
                    })),
                    "ls remote": toption(t.group({ // git ls-remote
                        'heads': prop(t.boolean()),
                        'tags': prop(t.boolean()),
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                    })),
                    "fetch dry run": toption(t.group({ // git fetch --dry-run
                        'all': prop(t.boolean()),
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
                "configuration": toption(t.state({
                    "config": toption(t.group({ // git config
                        'list': prop(t.boolean()),
                        'global': prop(t.boolean()),
                        'local': prop(t.boolean()),
                        'system': prop(t.boolean()),
                        'key': prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
            })),
            "change": toption(t.state({
                "workspace": toption(t.state({
                    "checkout file": toption(t.group({ // git checkout -- file (restore workspace)
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'force': prop(t.boolean()),
                    })),
                    "restore": toption(t.group({ // git restore (restore workspace)
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'source': prop(t.optional(t.text_local(text('single line')))),
                        'worktree': prop(t.boolean()),
                    })),
                    "clean": toption(t.group({ // git clean
                        'dry run': prop(t.boolean()),
                        'force': prop(t.boolean()),
                        'directories': prop(t.boolean()),
                        'ignored': prop(t.boolean()),
                    })),
                })),
                "index": toption(t.state({
                    "add": toption(t.group({ // git add
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'all': prop(t.boolean()),
                        'patch': prop(t.boolean()),
                        'update': prop(t.boolean()),
                    })),
                    "reset files": toption(t.group({ // git reset -- files (unstage)
                        'files': prop(t.list(t.text_local(text('single line')))),
                    })),
                    "restore staged": toption(t.group({ // git restore --staged
                        'files': prop(t.list(t.text_local(text('single line')))),
                    })),
                    "rm": toption(t.group({ // git rm
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'cached': prop(t.boolean()), // remove from index only
                        'force': prop(t.boolean()),
                    })),
                })),
                "stash": toption(t.state({
                    "push": toption(t.group({ // git stash push
                        'message': prop(t.optional(t.text_local(text('single line')))),
                        'keep index': prop(t.boolean()),
                        'include untracked': prop(t.boolean()),
                        'files': prop(t.optional(t.list(t.text_local(text('single line'))))),
                    })),
                    "pop": toption(t.group({ // git stash pop
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                        'index': prop(t.boolean()),
                    })),
                    "apply": toption(t.group({ // git stash apply
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                        'index': prop(t.boolean()),
                    })),
                    "drop": toption(t.group({ // git stash drop
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                    })),
                    "clear": toption(t.group({})), // git stash clear
                })),
                "local repo": toption(t.state({
                    "append": toption(t.state({ // ✅ Safe operations - append-only
                        "commit": toption(t.group({ // git commit
                            'message': prop(t.text_local(text('single line'))),
                            'amend': prop(t.boolean()), // Note: amend is actually destructive if commit is published
                            'all': prop(t.boolean()),
                            'no verify': prop(t.boolean()),
                            'signoff': prop(t.boolean()),
                        })),
                        "merge": toption(t.group({ // git merge (fast-forward or merge commit)
                            'branch': prop(t.text_local(text('single line'))),
                            'no ff': prop(t.boolean()),
                            'ff only': prop(t.boolean()),
                            'no commit': prop(t.boolean()),
                            'message': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "cherry pick": toption(t.group({ // git cherry-pick
                            'commits': prop(t.list(t.text_local(text('single line')))),
                            'no commit': prop(t.boolean()),
                            'mainline': prop(t.optional(t.simple("Natural"))),
                        })),
                        "revert": toption(t.group({ // git revert
                            'commits': prop(t.list(t.text_local(text('single line')))),
                            'no commit': prop(t.boolean()),
                            'mainline': prop(t.optional(t.simple("Natural"))),
                        })),
                        "branch create": toption(t.group({ // git branch <name>
                            'name': prop(t.text_local(text('single line'))),
                            'start point': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "tag create": toption(t.group({ // git tag <name>
                            'name': prop(t.text_local(text('single line'))),
                            'commit': prop(t.optional(t.text_local(text('single line')))),
                            'message': prop(t.optional(t.text_local(text('single line')))),
                            'annotated': prop(t.boolean()),
                        })),
                        "pull rebase private": toption(t.group({ // git pull --rebase (only safe if commits not published)
                            'remote': prop(t.optional(t.text_local(text('single line')))),
                            'branch': prop(t.optional(t.text_local(text('single line')))),
                        })),
                    })),
                    "destroy": toption(t.state({ // ⚠️ History-rewriting operations - force push required
                        "reset": toption(t.group({ // git reset (moves branch pointer backward)
                            'mode': prop(t.state({
                                'soft': toption(t.group({})), // keeps workspace and index
                                'mixed': toption(t.group({})), // keeps workspace, resets index (default)
                                'hard': toption(t.group({})), // ⚠️ DANGEROUS: resets workspace and index
                            })),
                            'target': prop(t.text_local(text('single line'))), // commit/branch to reset to
                        })),
                        "commit amend": toption(t.group({ // git commit --amend (rewrites last commit)
                            'message': prop(t.optional(t.text_local(text('single line')))),
                            'no edit': prop(t.boolean()),
                            'all': prop(t.boolean()),
                        })),
                        "rebase": toption(t.group({ // git rebase (rewrites commits)
                            'onto': prop(t.text_local(text('single line'))),
                            'interactive': prop(t.boolean()),
                            'preserve merges': prop(t.boolean()),
                            'strategy': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "filter repo": toption(t.group({ // git filter-repo (rewrites large parts of history)
                            'path': prop(t.optional(t.text_local(text('single line')))),
                            'invert paths': prop(t.boolean()),
                            'force': prop(t.boolean()),
                        })),
                        "tag force": toption(t.group({ // git tag -f (reassign tag to new commit)
                            'name': prop(t.text_local(text('single line'))),
                            'commit': prop(t.optional(t.text_local(text('single line')))),
                            'message': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "branch delete": toption(t.group({ // git branch -d/-D
                            'name': prop(t.text_local(text('single line'))),
                            'force': prop(t.boolean()), // -D vs -d
                        })),
                        "tag delete": toption(t.group({ // git tag -d
                            'name': prop(t.text_local(text('single line'))),
                        })),
                        "gc": toption(t.group({ // git gc (garbage collect unreachable commits)
                            'aggressive': prop(t.boolean()),
                            'prune': prop(t.optional(t.text_local(text('single line')))), // prune date
                        })),
                    })),
                })),
                "remote repo": toption(t.state({
                    "fetch": toption(t.group({ // git fetch
                        'all': prop(t.boolean()),
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'prune': prop(t.boolean()),
                    })),
                    "push": toption(t.group({ // git push
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'force': prop(t.boolean()), // ⚠️ DANGEROUS
                        'force with lease': prop(t.boolean()), // safer force
                        'set upstream': prop(t.boolean()),
                        'tags': prop(t.boolean()),
                        'delete': prop(t.optional(t.text_local(text('single line')))), // delete remote branch
                    })),
                    "pull": toption(t.group({ // git pull
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'rebase': prop(t.boolean()),
                        'no rebase': prop(t.boolean()),
                        'ff only': prop(t.boolean()),
                    })),
                    "clone": toption(t.group({ // git clone
                        'url': prop(t.text_local(text('single line'))),
                        'directory': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'depth': prop(t.optional(t.simple("Natural"))),
                        'recursive': prop(t.boolean()),
                    })),
                    "remote add": toption(t.group({ // git remote add
                        'name': prop(t.text_local(text('single line'))),
                        'url': prop(t.text_local(text('single line'))),
                    })),
                    "remote remove": toption(t.group({ // git remote remove
                        'name': prop(t.text_local(text('single line'))),
                    })),
                })),
                "configuration": toption(t.state({
                    "config set": toption(t.group({ // git config <key> <value>
                        'key': prop(t.text_local(text('single line'))),
                        'value': prop(t.text_local(text('single line'))),
                        'global': prop(t.boolean()),
                        'local': prop(t.boolean()),
                        'system': prop(t.boolean()),
                    })),
                    "config unset": toption(t.group({ // git config --unset <key>
                        'key': prop(t.text_local(text('single line'))),
                        'global': prop(t.boolean()),
                        'local': prop(t.boolean()),
                        'system': prop(t.boolean()),
                    })),
                })),
            })),
        })),

        // Safety metadata types
        "Safety Level": module_(t.state({
            'safe': toption(t.group({ // ✅ Safe for collaboration
                'description': prop(t.text_local(text('multi line'))),
            })),
            'risky': toption(t.group({ // ⚠️ Requires force push
                'description': prop(t.text_local(text('multi line'))),
                'areas affected': prop(t.list(t.text_local(text('single line')))), // which areas are modified
            })),
            'destructive': toption(t.group({ // ❌ Black swan - multiple area effects
                'description': prop(t.text_local(text('multi line'))),
                'areas affected': prop(t.list(t.text_local(text('single line')))),
                'warning': prop(t.text_local(text('multi line'))),
            })),
        })),

        // Command execution result
        "Command Result": module_(t.group({
            'command line': prop(t.text_local(text('single line'))), // the actual git command to execute
            'safety level': prop(t.text_local(text('single line'))), // references Safety Level
            'requires force push': prop(t.boolean()),
            'affected areas': prop(t.list(t.text_local(text('single line')))), // workspace, index, stash, local repo, remote repo, configuration
        })),
    }
)