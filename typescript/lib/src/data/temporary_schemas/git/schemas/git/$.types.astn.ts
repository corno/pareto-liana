
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Git Command": sh.module_(sh.t.state({
            "view": sh.toption(sh.t.state({
                "workspace": sh.toption(sh.t.state({
                    "status": sh.toption(sh.t.group({ // git status
                        'porcelain': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'short': sh.prop(sh.t.simple("boolean")),
                        'branch': sh.prop(sh.t.simple("boolean")),
                        'show stash': sh.prop(sh.t.simple("boolean")),
                    })),
                    "diff": sh.toption(sh.t.group({ // git diff
                        'cached': sh.prop(sh.t.simple("boolean")), // --cached for staged changes
                        'name only': sh.prop(sh.t.simple("boolean")),
                        'stat': sh.prop(sh.t.simple("boolean")),
                        'files': sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("text")))),
                    })),
                    "show": sh.toption(sh.t.group({ // git show
                        'commit': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'name only': sh.prop(sh.t.simple("boolean")),
                        'stat': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "index": sh.toption(sh.t.state({
                    "diff cached": sh.toption(sh.t.group({ // git diff --cached
                        'name only': sh.prop(sh.t.simple("boolean")),
                        'stat': sh.prop(sh.t.simple("boolean")),
                        'files': sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("text")))),
                    })),
                    "status": sh.toption(sh.t.group({ // git status (shows staged files)
                        'porcelain': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'short': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "stash": sh.toption(sh.t.state({
                    "list": sh.toption(sh.t.group({ // git stash.b.st
                        'oneline': sh.prop(sh.t.simple("boolean")),
                    })),
                    "show": sh.toption(sh.t.group({ // git stash show
                        'stash': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'patch': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "local repo": sh.toption(sh.t.state({
                    "log": sh.toption(sh.t.group({ // git log
                        'oneline': sh.prop(sh.t.simple("boolean")),
                        'graph': sh.prop(sh.t.simple("boolean")),
                        'all': sh.prop(sh.t.simple("boolean")),
                        'since': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'until': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'author': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'grep': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'max count': sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                    })),
                    "branch": sh.toption(sh.t.group({ // git branch (list)
                        'all': sh.prop(sh.t.simple("boolean")),
                        'remote': sh.prop(sh.t.simple("boolean")),
                        'verbose': sh.prop(sh.t.simple("boolean")),
                    })),
                    "tag": sh.toption(sh.t.group({ // git tag (list)
                        'list': sh.prop(sh.t.optional(sh.t.text_global("text"))), // pattern
                    })),
                    "reflog": sh.toption(sh.t.group({ // git reflog
                        'branch': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'oneline': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "remote repo": sh.toption(sh.t.state({
                    "remote": sh.toption(sh.t.group({ // git remote
                        'verbose': sh.prop(sh.t.simple("boolean")),
                    })),
                    "ls remote": sh.toption(sh.t.group({ // git ls-remote
                        'heads': sh.prop(sh.t.simple("boolean")),
                        'tags': sh.prop(sh.t.simple("boolean")),
                        'remote': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                    })),
                    "fetch dry run": sh.toption(sh.t.group({ // git fetch --dry-run
                        'all': sh.prop(sh.t.simple("boolean")),
                        'remote': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                    })),
                })),
                "configuration": sh.toption(sh.t.state({
                    "config": sh.toption(sh.t.group({ // git config
                        'list': sh.prop(sh.t.simple("boolean")),
                        'global': sh.prop(sh.t.simple("boolean")),
                        'local': sh.prop(sh.t.simple("boolean")),
                        'system': sh.prop(sh.t.simple("boolean")),
                        'key': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                    })),
                })),
            })),
            "change": sh.toption(sh.t.state({
                "workspace": sh.toption(sh.t.state({
                    "checkout file": sh.toption(sh.t.group({ // git checkout -- file (restore workspace)
                        'files': sh.prop(sh.t.list(sh.t.text_global("text"))),
                        'force': sh.prop(sh.t.simple("boolean")),
                    })),
                    "restore": sh.toption(sh.t.group({ // git restore (restore workspace)
                        'files': sh.prop(sh.t.list(sh.t.text_global("text"))),
                        'source': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'worktree': sh.prop(sh.t.simple("boolean")),
                    })),
                    "clean": sh.toption(sh.t.group({ // git clean
                        'dry run': sh.prop(sh.t.simple("boolean")),
                        'force': sh.prop(sh.t.simple("boolean")),
                        'directories': sh.prop(sh.t.simple("boolean")),
                        'ignored': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "index": sh.toption(sh.t.state({
                    "add": sh.toption(sh.t.group({ // git add
                        'files': sh.prop(sh.t.list(sh.t.text_global("text"))),
                        'all': sh.prop(sh.t.simple("boolean")),
                        'patch': sh.prop(sh.t.simple("boolean")),
                        'update': sh.prop(sh.t.simple("boolean")),
                    })),
                    "reset files": sh.toption(sh.t.group({ // git reset -- files (unstage)
                        'files': sh.prop(sh.t.list(sh.t.text_global("text"))),
                    })),
                    "restore staged": sh.toption(sh.t.group({ // git restore --staged
                        'files': sh.prop(sh.t.list(sh.t.text_global("text"))),
                    })),
                    "rm": sh.toption(sh.t.group({ // git rm
                        'files': sh.prop(sh.t.list(sh.t.text_global("text"))),
                        'cached': sh.prop(sh.t.simple("boolean")), // remove from index only
                        'force': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "stash": sh.toption(sh.t.state({
                    "push": sh.toption(sh.t.group({ // git stash push
                        'message': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'keep index': sh.prop(sh.t.simple("boolean")),
                        'include untracked': sh.prop(sh.t.simple("boolean")),
                        'files': sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("text")))),
                    })),
                    "pop": sh.toption(sh.t.group({ // git stash pop
                        'stash': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'index': sh.prop(sh.t.simple("boolean")),
                    })),
                    "apply": sh.toption(sh.t.group({ // git stash apply
                        'stash': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'index': sh.prop(sh.t.simple("boolean")),
                    })),
                    "drop": sh.toption(sh.t.group({ // git stash drop
                        'stash': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                    })),
                    "clear": sh.toption(sh.t.group({})), // git stash clear
                })),
                "local repo": sh.toption(sh.t.state({
                    "append": sh.toption(sh.t.state({ // ✅ Safe operations - append-only
                        "commit": sh.toption(sh.t.group({ // git commit
                            'message': sh.prop(sh.t.text_global("text")),
                            'amend': sh.prop(sh.t.simple("boolean")), // Note: amend is actually destructive if commit is published
                            'all': sh.prop(sh.t.simple("boolean")),
                            'no verify': sh.prop(sh.t.simple("boolean")),
                            'signoff': sh.prop(sh.t.simple("boolean")),
                        })),
                        "merge": sh.toption(sh.t.group({ // git merge (fast-forward or merge commit)
                            'branch': sh.prop(sh.t.text_global("text")),
                            'no ff': sh.prop(sh.t.simple("boolean")),
                            'ff only': sh.prop(sh.t.simple("boolean")),
                            'no commit': sh.prop(sh.t.simple("boolean")),
                            'message': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        })),
                        "cherry pick": sh.toption(sh.t.group({ // git cherry-pick
                            'commits': sh.prop(sh.t.list(sh.t.text_global("text"))),
                            'no commit': sh.prop(sh.t.simple("boolean")),
                            'mainline': sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                        })),
                        "revert": sh.toption(sh.t.group({ // git revert
                            'commits': sh.prop(sh.t.list(sh.t.text_global("text"))),
                            'no commit': sh.prop(sh.t.simple("boolean")),
                            'mainline': sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                        })),
                        "branch create": sh.toption(sh.t.group({ // git branch <name>
                            'name': sh.prop(sh.t.text_global("text")),
                            'start point': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        })),
                        "tag create": sh.toption(sh.t.group({ // git tag <name>
                            'name': sh.prop(sh.t.text_global("text")),
                            'commit': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                            'message': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                            'annotated': sh.prop(sh.t.simple("boolean")),
                        })),
                        "pull rebase private": sh.toption(sh.t.group({ // git pull --rebase (only safe if commits not published)
                            'remote': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                            'branch': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        })),
                    })),
                    "destroy": sh.toption(sh.t.state({ // ⚠️ History-rewriting operations - force push required
                        "reset": sh.toption(sh.t.group({ // git reset (moves branch pointer backward)
                            'mode': sh.prop(sh.t.state({
                                'soft': sh.toption(sh.t.group({})), // keeps workspace and index
                                'mixed': sh.toption(sh.t.group({})), // keeps workspace, resets index (default)
                                'hard': sh.toption(sh.t.group({})), // ⚠️ DANGEROUS: resets workspace and index
                            })),
                            'target': sh.prop(sh.t.text_global("text")), // commit/branch to reset to
                        })),
                        "commit amend": sh.toption(sh.t.group({ // git commit --amend (rewrites last commit)
                            'message': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                            'no edit': sh.prop(sh.t.simple("boolean")),
                            'all': sh.prop(sh.t.simple("boolean")),
                        })),
                        "rebase": sh.toption(sh.t.group({ // git rebase (rewrites commits)
                            'onto': sh.prop(sh.t.text_global("text")),
                            'interactive': sh.prop(sh.t.simple("boolean")),
                            'preserve merges': sh.prop(sh.t.simple("boolean")),
                            'strategy': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        })),
                        "filter repo": sh.toption(sh.t.group({ // git filter-repo (rewrites large parts of history)
                            'path': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                            'invert paths': sh.prop(sh.t.simple("boolean")),
                            'force': sh.prop(sh.t.simple("boolean")),
                        })),
                        "tag force": sh.toption(sh.t.group({ // git tag -f (reassign tag to new commit)
                            'name': sh.prop(sh.t.text_global("text")),
                            'commit': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                            'message': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        })),
                        "branch delete": sh.toption(sh.t.group({ // git branch -d/-D
                            'name': sh.prop(sh.t.text_global("text")),
                            'force': sh.prop(sh.t.simple("boolean")), // -D vs -d
                        })),
                        "tag delete": sh.toption(sh.t.group({ // git tag -d
                            'name': sh.prop(sh.t.text_global("text")),
                        })),
                        "gc": sh.toption(sh.t.group({ // git gc (garbage collect unreachable commits)
                            'aggressive': sh.prop(sh.t.simple("boolean")),
                            'prune': sh.prop(sh.t.optional(sh.t.text_global("text"))), // prune date
                        })),
                    })),
                })),
                "remote repo": sh.toption(sh.t.state({
                    "fetch": sh.toption(sh.t.group({ // git fetch
                        'all': sh.prop(sh.t.simple("boolean")),
                        'remote': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'branch': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'prune': sh.prop(sh.t.simple("boolean")),
                    })),
                    "push": sh.toption(sh.t.group({ // git push
                        'remote': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'branch': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'force': sh.prop(sh.t.simple("boolean")), // ⚠️ DANGEROUS
                        'force with lease': sh.prop(sh.t.simple("boolean")), // safer force
                        'set upstream': sh.prop(sh.t.simple("boolean")),
                        'tags': sh.prop(sh.t.simple("boolean")),
                        'delete': sh.prop(sh.t.optional(sh.t.text_global("text"))), // delete remote branch
                    })),
                    "pull": sh.toption(sh.t.group({ // git pull
                        'remote': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'branch': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'rebase': sh.prop(sh.t.simple("boolean")),
                        'no rebase': sh.prop(sh.t.simple("boolean")),
                        'ff only': sh.prop(sh.t.simple("boolean")),
                    })),
                    "clone": sh.toption(sh.t.group({ // git clone
                        'url': sh.prop(sh.t.text_global("text")),
                        'directory': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'branch': sh.prop(sh.t.optional(sh.t.text_global("text"))),
                        'depth': sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                        'recursive': sh.prop(sh.t.simple("boolean")),
                    })),
                    "remote add": sh.toption(sh.t.group({ // git remote add
                        'name': sh.prop(sh.t.text_global("text")),
                        'url': sh.prop(sh.t.text_global("text")),
                    })),
                    "remote remove": sh.toption(sh.t.group({ // git remote remove
                        'name': sh.prop(sh.t.text_global("text")),
                    })),
                })),
                "configuration": sh.toption(sh.t.state({
                    "config set": sh.toption(sh.t.group({ // git config <key> <value>
                        'key': sh.prop(sh.t.text_global("text")),
                        'value': sh.prop(sh.t.text_global("text")),
                        'global': sh.prop(sh.t.simple("boolean")),
                        'local': sh.prop(sh.t.simple("boolean")),
                        'system': sh.prop(sh.t.simple("boolean")),
                    })),
                    "config unset": sh.toption(sh.t.group({ // git config --unset <key>
                        'key': sh.prop(sh.t.text_global("text")),
                        'global': sh.prop(sh.t.simple("boolean")),
                        'local': sh.prop(sh.t.simple("boolean")),
                        'system': sh.prop(sh.t.simple("boolean")),
                    })),
                })),
            })),
        })),

        // Safety metadata types
        "Safety Level": sh.module_(sh.t.state({
            'safe': sh.toption(sh.t.group({ // ✅ Safe for collaboration
                'description': sh.prop(sh.t.text_global("multi line text")),
            })),
            'risky': sh.toption(sh.t.group({ // ⚠️ Requires force push
                'description': sh.prop(sh.t.text_global("multi line text")),
                'areas affected': sh.prop(sh.t.list(sh.t.text_global("text"))), // which areas are modified
            })),
            'destructive': sh.toption(sh.t.group({ // ❌ Black swan - multiple area effects
                'description': sh.prop(sh.t.text_global("multi line text")),
                'areas affected': sh.prop(sh.t.list(sh.t.text_global("text"))),
                'warning': sh.prop(sh.t.text_global("multi line text")),
            })),
        })),

        // Command execution result
        "Command Result": sh.module_(sh.t.group({
            'command line': sh.prop(sh.t.text_global("text")), // the actual git command to execute
            'safety level': sh.prop(sh.t.text_global("text")), // references Safety Level
            'requires force push': sh.prop(sh.t.simple("boolean")),
            'affected areas': sh.prop(sh.t.list(sh.t.text_global("text"))), // workspace, index, stash, local repo, remote repo, configuration
        })),
    }
)