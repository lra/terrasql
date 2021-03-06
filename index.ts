#!/usr/bin/env node
const doc: string = `TerraSQL.

Diff tool for SQL tables, like terraform.

Usage:
  terrasql plan
  terrasql apply
  terrasql -h | --help
  terrasql --version

Commands:
  plan          Compare local and remote DDL and display any diff as SQL.
  apply         Compare local and remote DDL and apply any SQL diff.

Options:
  -h --help     Show this screen.
  --version     Show version.
`

import {docopt} from "docopt"
import * as pjson from "pjson"

console.log(docopt(doc, { version: pjson.version }))
