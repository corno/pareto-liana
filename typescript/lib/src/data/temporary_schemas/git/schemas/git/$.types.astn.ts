

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {
        "Git Command": module_(t.state({
            "view": toption(t.state({
                "workspace": toption(t.state({
                    "status": toption(t.group({ // git status
                        'porcelain': prop(t.optional(t.text_global("text"))),
                        'short': prop(t.simple("boolean")),
                        'branch': prop(t.simple("boolean")),
                        'show stash': prop(t.simple("boolean")),
                    })),
                    "diff": toption(t.group({ // git diff
                        'cached': prop(t.simple("boolean")), // --cached for staged changes
                        'name only': prop(t.simple("boolean")),
                        'stat': prop(t.simple("boolean")),
                        'files': prop(t.optional(t.list(t.text_global("text")))),
                    })),
                    "show": toption(t.group({ // git show
                        'commit': prop(t.optional(t.text_global("text"))),
                        'name only': prop(t.simple("boolean")),
                        'stat': prop(t.simple("boolean")),
                    })),
                })),
                "index": toption(t.state({
                    "diff cached": toption(t.group({ // git diff --cached
                        'name only': prop(t.simple("boolean")),
                        'stat': prop(t.simple("boolean")),
                        'files': prop(t.optional(t.list(t.text_global("text")))),
                    })),
                    "status": toption(t.group({ // git status (shows staged files)
                        'porcelain': prop(t.optional(t.text_global("text"))),
                        'short': prop(t.simple("boolean")),
                    })),
                })),
                "stash": toption(t.state({
                    "list": toption(t.group({ // git stash.b.st
                        'oneline': prop(t.simple("boolean")),
                    })),
                    "show": toption(t.group({ // git stash show
                        'stash': prop(t.optional(t.text_global("text"))),
                        'patch': prop(t.simple("boolean")),
                    })),
                })),
                "local repo": toption(t.state({
                    "log": toption(t.group({ // git log
                        'oneline': prop(t.simple("boolean")),
                        'graph': prop(t.simple("boolean")),
                        'all': prop(t.simple("boolean")),
                        'since': prop(t.optional(t.text_global("text"))),
                        'until': prop(t.optional(t.text_global("text"))),
                        'author': prop(t.optional(t.text_global("text"))),
                        'grep': prop(t.optional(t.text_global("text"))),
                        'max count': prop(t.optional(t.simple("Natural"))),
                    })),
                    "branch": toption(t.group({ // git branch (list)
                        'all': prop(t.simple("boolean")),
                        'remote': prop(t.simple("boolean")),
                        'verbose': prop(t.simple("boolean")),
                    })),
                    "tag": toption(t.group({ // git tag (list)
                        'list': prop(t.optional(t.text_global("text"))), // pattern
                    })),
                    "reflog": toption(t.group({ // git reflog
                        'branch': prop(t.optional(t.text_global("text"))),
                        'oneline': prop(t.simple("boolean")),
                    })),
                })),
                "remote repo": toption(t.state({
                    "remote": toption(t.group({ // git remote
                        'verbose': prop(t.simple("boolean")),
                    })),
                    "ls remote": toption(t.group({ // git ls-remote
                        'heads': prop(t.simple("boolean")),
                        'tags': prop(t.simple("boolean")),
                        'remote': prop(t.optional(t.text_global("text"))),
                    })),
                    "fetch dry run": toption(t.group({ // git fetch --dry-run
                        'all': prop(t.simple("boolean")),
                        'remote': prop(t.optional(t.text_global("text"))),
                    })),
                })),
                "configuration": toption(t.state({
                    "config": toption(t.group({ // git config
                        'list': prop(t.simple("boolean")),
                        'global': prop(t.simple("boolean")),
                        'local': prop(t.simple("boolean")),
                        'system': prop(t.simple("boolean")),
                        'key': prop(t.optional(t.text_global("text"))),
                    })),
                })),
            })),
            "change": toption(t.state({
                "workspace": toption(t.state({
                    "checkout file": toption(t.group({ // git checkout -- file (restore workspace)
                        'files': prop(t.list(t.text_global("text"))),
                        'force': prop(t.simple("boolean")),
                    })),
                    "restore": toption(t.group({ // git restore (restore workspace)
                        'files': prop(t.list(t.text_global("text"))),
                        'source': prop(t.optional(t.text_global("text"))),
                        'worktree': prop(t.simple("boolean")),
                    })),
                    "clean": toption(t.group({ // git clean
                        'dry run': prop(t.simple("boolean")),
                        'force': prop(t.simple("boolean")),
                        'directories': prop(t.simple("boolean")),
                        'ignored': prop(t.simple("boolean")),
                    })),
                })),
                "index": toption(t.state({
                    "add": toption(t.group({ // git add
                        'files': prop(t.list(t.text_global("text"))),
                        'all': prop(t.simple("boolean")),
                        'patch': prop(t.simple("boolean")),
                        'update': prop(t.simple("boolean")),
                    })),
                    "reset files": toption(t.group({ // git reset -- files (unstage)
                        'files': prop(t.list(t.text_global("text"))),
                    })),
                    "restore staged": toption(t.group({ // git restore --staged
                        'files': prop(t.list(t.text_global("text"))),
                    })),
                    "rm": toption(t.group({ // git rm
                        'files': prop(t.list(t.text_global("text"))),
                        'cached': prop(t.simple("boolean")), // remove from index only
                        'force': prop(t.simple("boolean")),
                    })),
                })),
                "stash": toption(t.state({
                    "push": toption(t.group({ // git stash push
                        'message': prop(t.optional(t.text_global("text"))),
                        'keep index': prop(t.simple("boolean")),
                        'include untracked': prop(t.simple("boolean")),
                        'files': prop(t.optional(t.list(t.text_global("text")))),
                    })),
                    "pop": toption(t.group({ // git stash pop
                        'stash': prop(t.optional(t.text_global("text"))),
                        'index': prop(t.simple("boolean")),
                    })),
                    "apply": toption(t.group({ // git stash apply
                        'stash': prop(t.optional(t.text_global("text"))),
                        'index': prop(t.simple("boolean")),
                    })),
                    "drop": toption(t.group({ // git stash drop
                        'stash': prop(t.optional(t.text_global("text"))),
                    })),
                    "clear": toption(t.group({})), // git stash clear
                })),
                "local repo": toption(t.state({
                    "append": toption(t.state({ // ✅ Safe operations - append-only
                        "commit": toption(t.group({ // git commit
                            'message': prop(t.text_global("text")),
                            'amend': prop(t.simple("boolean")), // Note: amend is actually destructive if commit is published
                            'all': prop(t.simple("boolean")),
                            'no verify': prop(t.simple("boolean")),
                            'signoff': prop(t.simple("boolean")),
                        })),
                        "merge": toption(t.group({ // git merge (fast-forward or merge commit)
                            'branch': prop(t.text_global("text")),
                            'no ff': prop(t.simple("boolean")),
                            'ff only': prop(t.simple("boolean")),
                            'no commit': prop(t.simple("boolean")),
                            'message': prop(t.optional(t.text_global("text"))),
                        })),
                        "cherry pick": toption(t.group({ // git cherry-pick
                            'commits': prop(t.list(t.text_global("text"))),
                            'no commit': prop(t.simple("boolean")),
                            'mainline': prop(t.optional(t.simple("Natural"))),
                        })),
                        "revert": toption(t.group({ // git revert
                            'commits': prop(t.list(t.text_global("text"))),
                            'no commit': prop(t.simple("boolean")),
                            'mainline': prop(t.optional(t.simple("Natural"))),
                        })),
                        "branch create": toption(t.group({ // git branch <name>
                            'name': prop(t.text_global("text")),
                            'start point': prop(t.optional(t.text_global("text"))),
                        })),
                        "tag create": toption(t.group({ // git tag <name>
                            'name': prop(t.text_global("text")),
                            'commit': prop(t.optional(t.text_global("text"))),
                            'message': prop(t.optional(t.text_global("text"))),
                            'annotated': prop(t.simple("boolean")),
                        })),
                        "pull rebase private": toption(t.group({ // git pull --rebase (only safe if commits not published)
                            'remote': prop(t.optional(t.text_global("text"))),
                            'branch': prop(t.optional(t.text_global("text"))),
                        })),
                    })),
                    "destroy": toption(t.state({ // ⚠️ History-rewriting operations - force push required
                        "reset": toption(t.group({ // git reset (moves branch pointer backward)
                            'mode': prop(t.state({
                                'soft': toption(t.group({})), // keeps workspace and index
                                'mixed': toption(t.group({})), // keeps workspace, resets index (default)
                                'hard': toption(t.group({})), // ⚠️ DANGEROUS: resets workspace and index
                            })),
                            'target': prop(t.text_global("text")), // commit/branch to reset to
                        })),
                        "commit amend": toption(t.group({ // git commit --amend (rewrites last commit)
                            'message': prop(t.optional(t.text_global("text"))),
                            'no edit': prop(t.simple("boolean")),
                            'all': prop(t.simple("boolean")),
                        })),
                        "rebase": toption(t.group({ // git rebase (rewrites commits)
                            'onto': prop(t.text_global("text")),
                            'interactive': prop(t.simple("boolean")),
                            'preserve merges': prop(t.simple("boolean")),
                            'strategy': prop(t.optional(t.text_global("text"))),
                        })),
                        "filter repo": toption(t.group({ // git filter-repo (rewrites large parts of history)
                            'path': prop(t.optional(t.text_global("text"))),
                            'invert paths': prop(t.simple("boolean")),
                            'force': prop(t.simple("boolean")),
                        })),
                        "tag force": toption(t.group({ // git tag -f (reassign tag to new commit)
                            'name': prop(t.text_global("text")),
                            'commit': prop(t.optional(t.text_global("text"))),
                            'message': prop(t.optional(t.text_global("text"))),
                        })),
                        "branch delete": toption(t.group({ // git branch -d/-D
                            'name': prop(t.text_global("text")),
                            'force': prop(t.simple("boolean")), // -D vs -d
                        })),
                        "tag delete": toption(t.group({ // git tag -d
                            'name': prop(t.text_global("text")),
                        })),
                        "gc": toption(t.group({ // git gc (garbage collect unreachable commits)
                            'aggressive': prop(t.simple("boolean")),
                            'prune': prop(t.optional(t.text_global("text"))), // prune date
                        })),
                    })),
                })),
                "remote repo": toption(t.state({
                    "fetch": toption(t.group({ // git fetch
                        'all': prop(t.simple("boolean")),
                        'remote': prop(t.optional(t.text_global("text"))),
                        'branch': prop(t.optional(t.text_global("text"))),
                        'prune': prop(t.simple("boolean")),
                    })),
                    "push": toption(t.group({ // git push
                        'remote': prop(t.optional(t.text_global("text"))),
                        'branch': prop(t.optional(t.text_global("text"))),
                        'force': prop(t.simple("boolean")), // ⚠️ DANGEROUS
                        'force with lease': prop(t.simple("boolean")), // safer force
                        'set upstream': prop(t.simple("boolean")),
                        'tags': prop(t.simple("boolean")),
                        'delete': prop(t.optional(t.text_global("text"))), // delete remote branch
                    })),
                    "pull": toption(t.group({ // git pull
                        'remote': prop(t.optional(t.text_global("text"))),
                        'branch': prop(t.optional(t.text_global("text"))),
                        'rebase': prop(t.simple("boolean")),
                        'no rebase': prop(t.simple("boolean")),
                        'ff only': prop(t.simple("boolean")),
                    })),
                    "clone": toption(t.group({ // git clone
                        'url': prop(t.text_global("text")),
                        'directory': prop(t.optional(t.text_global("text"))),
                        'branch': prop(t.optional(t.text_global("text"))),
                        'depth': prop(t.optional(t.simple("Natural"))),
                        'recursive': prop(t.simple("boolean")),
                    })),
                    "remote add": toption(t.group({ // git remote add
                        'name': prop(t.text_global("text")),
                        'url': prop(t.text_global("text")),
                    })),
                    "remote remove": toption(t.group({ // git remote remove
                        'name': prop(t.text_global("text")),
                    })),
                })),
                "configuration": toption(t.state({
                    "config set": toption(t.group({ // git config <key> <value>
                        'key': prop(t.text_global("text")),
                        'value': prop(t.text_global("text")),
                        'global': prop(t.simple("boolean")),
                        'local': prop(t.simple("boolean")),
                        'system': prop(t.simple("boolean")),
                    })),
                    "config unset": toption(t.group({ // git config --unset <key>
                        'key': prop(t.text_global("text")),
                        'global': prop(t.simple("boolean")),
                        'local': prop(t.simple("boolean")),
                        'system': prop(t.simple("boolean")),
                    })),
                })),
            })),
        })),

        // Safety metadata types
        "Safety Level": module_(t.state({
            'safe': toption(t.group({ // ✅ Safe for collaboration
                'description': prop(t.text_global("multi line text")),
            })),
            'risky': toption(t.group({ // ⚠️ Requires force push
                'description': prop(t.text_global("multi line text")),
                'areas affected': prop(t.list(t.text_global("text"))), // which areas are modified
            })),
            'destructive': toption(t.group({ // ❌ Black swan - multiple area effects
                'description': prop(t.text_global("multi line text")),
                'areas affected': prop(t.list(t.text_global("text"))),
                'warning': prop(t.text_global("multi line text")),
            })),
        })),

        // Command execution result
        "Command Result": module_(t.group({
            'command line': prop(t.text_global("text")), // the actual git command to execute
            'safety level': prop(t.text_global("text")), // references Safety Level
            'requires force push': prop(t.simple("boolean")),
            'affected areas': prop(t.list(t.text_global("text"))), // workspace, index, stash, local repo, remote repo, configuration
        })),
    }
)