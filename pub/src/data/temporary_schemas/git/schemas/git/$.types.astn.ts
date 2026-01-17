import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Git Command": type(t.state_group({
            "view": tstate(t.state_group({
                "workspace": tstate(t.state_group({
                    "status": tstate(t.group({ // git status
                        'porcelain': prop(t.optional(t.text_local(text('single line')))),
                        'short': prop(t.boolean()),
                        'branch': prop(t.boolean()),
                        'show stash': prop(t.boolean()),
                    })),
                    "diff": tstate(t.group({ // git diff
                        'cached': prop(t.boolean()), // --cached for staged changes
                        'name only': prop(t.boolean()),
                        'stat': prop(t.boolean()),
                        'files': prop(t.optional(t.list(t.text_local(text('single line'))))),
                    })),
                    "show": tstate(t.group({ // git show
                        'commit': prop(t.optional(t.text_local(text('single line')))),
                        'name only': prop(t.boolean()),
                        'stat': prop(t.boolean()),
                    })),
                })),
                "index": tstate(t.state_group({
                    "diff cached": tstate(t.group({ // git diff --cached
                        'name only': prop(t.boolean()),
                        'stat': prop(t.boolean()),
                        'files': prop(t.optional(t.list(t.text_local(text('single line'))))),
                    })),
                    "status": tstate(t.group({ // git status (shows staged files)
                        'porcelain': prop(t.optional(t.text_local(text('single line')))),
                        'short': prop(t.boolean()),
                    })),
                })),
                "stash": tstate(t.state_group({
                    "list": tstate(t.group({ // git stash.b.st
                        'oneline': prop(t.boolean()),
                    })),
                    "show": tstate(t.group({ // git stash show
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                        'patch': prop(t.boolean()),
                    })),
                })),
                "local repo": tstate(t.state_group({
                    "log": tstate(t.group({ // git log
                        'oneline': prop(t.boolean()),
                        'graph': prop(t.boolean()),
                        'all': prop(t.boolean()),
                        'since': prop(t.optional(t.text_local(text('single line')))),
                        'until': prop(t.optional(t.text_local(text('single line')))),
                        'author': prop(t.optional(t.text_local(text('single line')))),
                        'grep': prop(t.optional(t.text_local(text('single line')))),
                        'max count': prop(t.optional(t.number_local(n.natural()))),
                    })),
                    "branch": tstate(t.group({ // git branch (list)
                        'all': prop(t.boolean()),
                        'remote': prop(t.boolean()),
                        'verbose': prop(t.boolean()),
                    })),
                    "tag": tstate(t.group({ // git tag (list)
                        'list': prop(t.optional(t.text_local(text('single line')))), // pattern
                    })),
                    "reflog": tstate(t.group({ // git reflog
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'oneline': prop(t.boolean()),
                    })),
                })),
                "remote repo": tstate(t.state_group({
                    "remote": tstate(t.group({ // git remote
                        'verbose': prop(t.boolean()),
                    })),
                    "ls remote": tstate(t.group({ // git ls-remote
                        'heads': prop(t.boolean()),
                        'tags': prop(t.boolean()),
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                    })),
                    "fetch dry run": tstate(t.group({ // git fetch --dry-run
                        'all': prop(t.boolean()),
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
                "configuration": tstate(t.state_group({
                    "config": tstate(t.group({ // git config
                        'list': prop(t.boolean()),
                        'global': prop(t.boolean()),
                        'local': prop(t.boolean()),
                        'system': prop(t.boolean()),
                        'key': prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
            })),
            "change": tstate(t.state_group({
                "workspace": tstate(t.state_group({
                    "checkout file": tstate(t.group({ // git checkout -- file (restore workspace)
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'force': prop(t.boolean()),
                    })),
                    "restore": tstate(t.group({ // git restore (restore workspace)
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'source': prop(t.optional(t.text_local(text('single line')))),
                        'worktree': prop(t.boolean()),
                    })),
                    "clean": tstate(t.group({ // git clean
                        'dry run': prop(t.boolean()),
                        'force': prop(t.boolean()),
                        'directories': prop(t.boolean()),
                        'ignored': prop(t.boolean()),
                    })),
                })),
                "index": tstate(t.state_group({
                    "add": tstate(t.group({ // git add
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'all': prop(t.boolean()),
                        'patch': prop(t.boolean()),
                        'update': prop(t.boolean()),
                    })),
                    "reset files": tstate(t.group({ // git reset -- files (unstage)
                        'files': prop(t.list(t.text_local(text('single line')))),
                    })),
                    "restore staged": tstate(t.group({ // git restore --staged
                        'files': prop(t.list(t.text_local(text('single line')))),
                    })),
                    "rm": tstate(t.group({ // git rm
                        'files': prop(t.list(t.text_local(text('single line')))),
                        'cached': prop(t.boolean()), // remove from index only
                        'force': prop(t.boolean()),
                    })),
                })),
                "stash": tstate(t.state_group({
                    "push": tstate(t.group({ // git stash push
                        'message': prop(t.optional(t.text_local(text('single line')))),
                        'keep index': prop(t.boolean()),
                        'include untracked': prop(t.boolean()),
                        'files': prop(t.optional(t.list(t.text_local(text('single line'))))),
                    })),
                    "pop": tstate(t.group({ // git stash pop
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                        'index': prop(t.boolean()),
                    })),
                    "apply": tstate(t.group({ // git stash apply
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                        'index': prop(t.boolean()),
                    })),
                    "drop": tstate(t.group({ // git stash drop
                        'stash': prop(t.optional(t.text_local(text('single line')))),
                    })),
                    "clear": tstate(t.group({})), // git stash clear
                })),
                "local repo": tstate(t.state_group({
                    "append": tstate(t.state_group({ // ✅ Safe operations - append-only
                        "commit": tstate(t.group({ // git commit
                            'message': prop(t.text_local(text('single line'))),
                            'amend': prop(t.boolean()), // Note: amend is actually destructive if commit is published
                            'all': prop(t.boolean()),
                            'no verify': prop(t.boolean()),
                            'signoff': prop(t.boolean()),
                        })),
                        "merge": tstate(t.group({ // git merge (fast-forward or merge commit)
                            'branch': prop(t.text_local(text('single line'))),
                            'no ff': prop(t.boolean()),
                            'ff only': prop(t.boolean()),
                            'no commit': prop(t.boolean()),
                            'message': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "cherry pick": tstate(t.group({ // git cherry-pick
                            'commits': prop(t.list(t.text_local(text('single line')))),
                            'no commit': prop(t.boolean()),
                            'mainline': prop(t.optional(t.number_local(n.natural()))),
                        })),
                        "revert": tstate(t.group({ // git revert
                            'commits': prop(t.list(t.text_local(text('single line')))),
                            'no commit': prop(t.boolean()),
                            'mainline': prop(t.optional(t.number_local(n.natural()))),
                        })),
                        "branch create": tstate(t.group({ // git branch <name>
                            'name': prop(t.text_local(text('single line'))),
                            'start point': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "tag create": tstate(t.group({ // git tag <name>
                            'name': prop(t.text_local(text('single line'))),
                            'commit': prop(t.optional(t.text_local(text('single line')))),
                            'message': prop(t.optional(t.text_local(text('single line')))),
                            'annotated': prop(t.boolean()),
                        })),
                        "pull rebase private": tstate(t.group({ // git pull --rebase (only safe if commits not published)
                            'remote': prop(t.optional(t.text_local(text('single line')))),
                            'branch': prop(t.optional(t.text_local(text('single line')))),
                        })),
                    })),
                    "destroy": tstate(t.state_group({ // ⚠️ History-rewriting operations - force push required
                        "reset": tstate(t.group({ // git reset (moves branch pointer backward)
                            'mode': prop(t.state_group({
                                'soft': tstate(t.group({})), // keeps workspace and index
                                'mixed': tstate(t.group({})), // keeps workspace, resets index (default)
                                'hard': tstate(t.group({})), // ⚠️ DANGEROUS: resets workspace and index
                            })),
                            'target': prop(t.text_local(text('single line'))), // commit/branch to reset to
                        })),
                        "commit amend": tstate(t.group({ // git commit --amend (rewrites last commit)
                            'message': prop(t.optional(t.text_local(text('single line')))),
                            'no edit': prop(t.boolean()),
                            'all': prop(t.boolean()),
                        })),
                        "rebase": tstate(t.group({ // git rebase (rewrites commits)
                            'onto': prop(t.text_local(text('single line'))),
                            'interactive': prop(t.boolean()),
                            'preserve merges': prop(t.boolean()),
                            'strategy': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "filter repo": tstate(t.group({ // git filter-repo (rewrites large parts of history)
                            'path': prop(t.optional(t.text_local(text('single line')))),
                            'invert paths': prop(t.boolean()),
                            'force': prop(t.boolean()),
                        })),
                        "tag force": tstate(t.group({ // git tag -f (reassign tag to new commit)
                            'name': prop(t.text_local(text('single line'))),
                            'commit': prop(t.optional(t.text_local(text('single line')))),
                            'message': prop(t.optional(t.text_local(text('single line')))),
                        })),
                        "branch delete": tstate(t.group({ // git branch -d/-D
                            'name': prop(t.text_local(text('single line'))),
                            'force': prop(t.boolean()), // -D vs -d
                        })),
                        "tag delete": tstate(t.group({ // git tag -d
                            'name': prop(t.text_local(text('single line'))),
                        })),
                        "gc": tstate(t.group({ // git gc (garbage collect unreachable commits)
                            'aggressive': prop(t.boolean()),
                            'prune': prop(t.optional(t.text_local(text('single line')))), // prune date
                        })),
                    })),
                })),
                "remote repo": tstate(t.state_group({
                    "fetch": tstate(t.group({ // git fetch
                        'all': prop(t.boolean()),
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'prune': prop(t.boolean()),
                    })),
                    "push": tstate(t.group({ // git push
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'force': prop(t.boolean()), // ⚠️ DANGEROUS
                        'force with lease': prop(t.boolean()), // safer force
                        'set upstream': prop(t.boolean()),
                        'tags': prop(t.boolean()),
                        'delete': prop(t.optional(t.text_local(text('single line')))), // delete remote branch
                    })),
                    "pull": tstate(t.group({ // git pull
                        'remote': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'rebase': prop(t.boolean()),
                        'no rebase': prop(t.boolean()),
                        'ff only': prop(t.boolean()),
                    })),
                    "clone": tstate(t.group({ // git clone
                        'url': prop(t.text_local(text('single line'))),
                        'directory': prop(t.optional(t.text_local(text('single line')))),
                        'branch': prop(t.optional(t.text_local(text('single line')))),
                        'depth': prop(t.optional(t.number_local(n.natural()))),
                        'recursive': prop(t.boolean()),
                    })),
                    "remote add": tstate(t.group({ // git remote add
                        'name': prop(t.text_local(text('single line'))),
                        'url': prop(t.text_local(text('single line'))),
                    })),
                    "remote remove": tstate(t.group({ // git remote remove
                        'name': prop(t.text_local(text('single line'))),
                    })),
                })),
                "configuration": tstate(t.state_group({
                    "config set": tstate(t.group({ // git config <key> <value>
                        'key': prop(t.text_local(text('single line'))),
                        'value': prop(t.text_local(text('single line'))),
                        'global': prop(t.boolean()),
                        'local': prop(t.boolean()),
                        'system': prop(t.boolean()),
                    })),
                    "config unset": tstate(t.group({ // git config --unset <key>
                        'key': prop(t.text_local(text('single line'))),
                        'global': prop(t.boolean()),
                        'local': prop(t.boolean()),
                        'system': prop(t.boolean()),
                    })),
                })),
            })),
        })),

        // Safety metadata types
        "Safety Level": type(t.state_group({
            'safe': tstate(t.group({ // ✅ Safe for collaboration
                'description': prop(t.text_local(text('multi line'))),
            })),
            'risky': tstate(t.group({ // ⚠️ Requires force push
                'description': prop(t.text_local(text('multi line'))),
                'areas affected': prop(t.list(t.text_local(text('single line')))), // which areas are modified
            })),
            'destructive': tstate(t.group({ // ❌ Black swan - multiple area effects
                'description': prop(t.text_local(text('multi line'))),
                'areas affected': prop(t.list(t.text_local(text('single line')))),
                'warning': prop(t.text_local(text('multi line'))),
            })),
        })),

        // Command execution result
        "Command Result": type(t.group({
            'command line': prop(t.text_local(text('single line'))), // the actual git command to execute
            'safety level': prop(t.text_local(text('single line'))), // references Safety Level
            'requires force push': prop(t.boolean()),
            'affected areas': prop(t.list(t.text_local(text('single line')))), // workspace, index, stash, local repo, remote repo, configuration
        })),
    }
)