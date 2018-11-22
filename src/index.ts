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

import MySQL from "./mysql"
import { sleep } from "./utils"

console.log(docopt(doc, { version: pjson.version }))

function respondToPing(error) {
  if (error) {
    throw error
  }
}

function displayRowsAndFields(error, results, fields) {
  if (error) {
    throw error
  }
  console.log(results)
  console.log(fields)
}

function throwError(error) {
  if (error) {
    throw error
  }
}

const mysql: MySQL = new MySQL("analogue", "", "analogue")
mysql.connection.ping(respondToPing)
mysql.connection.query("SELECT NOW()", displayRowsAndFields)
mysql.connection.end(throwError)
